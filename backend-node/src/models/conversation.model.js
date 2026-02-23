const mongoose=require("mongoose");

const conversationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true
    },
    title:{
        type:String,
        default:"New Chat"
    }
},{timestamps:true})

const conversationModel=mongoose.model("conversations",conversationSchema);

module.exports=conversationModel;