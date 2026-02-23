const express=require("express")
const chatController=require("../controllers/chat.controller")
const router=express.Router()
const authMiddleware=require("../middlewares/auth.middleware")


router.get("/",authMiddleware,(req,res)=>{
    return res.status(201).json({
        "message":"You can send your query to ChatBot from here"
    })
})

router.post('/create-conversation',authMiddleware,chatController.createConversation)

router.post('/send-message',authMiddleware,chatController.sendMessage)

router.get('/all-conversation',authMiddleware,chatController.getAllConversation)

router.get('/all-message-in-conversation/:cid',authMiddleware,chatController.getAllMessageInConversation)

module.exports=router