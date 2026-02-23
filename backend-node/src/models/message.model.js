const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
    conversationId:{
        type:mongoose.Types.ObjectId,
        required:truee
    },
    role:{
        type:String,
        enum:["user","assistant"],
        required:true
    },
    content:String,
    createdAt:{
        type:Date,
        required:true
    }
})