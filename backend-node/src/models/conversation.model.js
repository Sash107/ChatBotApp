const mongoose=require("mongoose");

const conversationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    }
})

const conversationModel=mongoose.model("conversations",conversationSchema);

module.exports=conversationModel;