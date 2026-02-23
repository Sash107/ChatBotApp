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

module.exports={createConversation,sendMessage};