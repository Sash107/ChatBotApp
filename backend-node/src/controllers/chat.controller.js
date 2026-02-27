const axios=require("axios")
const conversationModel=require("../models/conversation.model")
const messageModel=require("../models/message.model")


async function createConversation(req,res){
    const {title}=req.body
    const userId=req.user.id

    const conversation=await conversationModel.create({
        userId,title
    })

    res.status(201).json(conversation)
    
}

async function sendMessage(req,res){

    try{       
        const {message,conversationId}=req.body
        const userId=req.user.id

        const conversation=await conversationModel.findOne({
            _id:conversationId,
            userId
        })

        if(!conversation){
            return res.status(404).json({
                message:"Conversation not found"
            })
        }
        
        await messageModel.create({
            conversationId:conversationId,
            role:"user",
            content:message
        })

        const lastmessages=await messageModel.find({conversationId}).sort({createdAt:-1}).limit(9).select("role content -_id");
        lastmessages.reverse();
        
        const response=await axios.post('http://127.0.0.1:8000/ask_chatBot',{messages:lastmessages});

        await messageModel.create({
            conversationId:conversationId,
            role:"assistant",
            content:response.data.res
        })

        return res.status(200).json(
            {reply:response.data.res});

    }catch(err){
        console.log(err)
    }


}

async function getAllConversation(req,res){
    const userId=req.user.id
    const allConversation=await conversationModel.find({
        userId:userId
    }).sort({createdAt:-1});

    res.status(201).json({
        allConversation
    })
}

async function getAllMessageInConversation(req,res){
    const conversationId=req.params.cid;
    const userId=req.user.id

    const conversation=await conversationModel.findOne({
        _id:conversationId
    })

    if(!conversation){
        res.status(404).json({
            message:"Conversation not found"
        })
    }

    if(conversation.userId!=userId){
        res.status(404).json({
            message:"Conversation not found"
        })
    }

    const messages=await messageModel.find({
        conversationId:conversationId
    }).select("role content createdAt -_id")

    return res.status(200).json({
        messages:messages
    })
}

module.exports={createConversation,sendMessage,getAllConversation,getAllMessageInConversation};