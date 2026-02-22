const express=require("express")
const chatController=require("../controllers/chat.controller")
const router=express.Router()
const authMiddleware=require("../middlewares/auth.middleware")


router.get("/",authMiddleware,(req,res)=>{
    return res.status(201).json({
        "message":"You can send your query to ChatBot from here"
    })
})

router.post("/send",authMiddleware,chatController.askChatBot)

module.exports=router