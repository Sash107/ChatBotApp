const axios=require("axios")

async function askChatBot(req,res){

    try{
        const {message}=req.body

        if(!message){
            res.status(400).json({
                error:"Message is required"
            })
        }

        const response=await axios.post("http://127.0.0.1:8000/ask_chatBot",{message})

        return res.status(201).json({
            response:response.data
        })

    }catch(err){
        console.log(err)
    }

    
}

module.exports={askChatBot};