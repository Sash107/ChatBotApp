const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
    conversationId:{
        type:mongoose.Types.ObjectId,
        ref:"conversations",
        required:true
    },
    role:{
        type:String,
        enum:["user","assistant"],
        required:true
    },
    content:String,
},{timestamps:true});

const messageModel=mongoose.model("messages",messageSchema);

module.exports=messageModel;