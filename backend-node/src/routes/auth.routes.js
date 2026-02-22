const express=require("express")
const authController=require("../controllers/auth.controller")
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(201).json({
        "message":"Hello World"
    })
})

router.post('/signup',authController.registerUser)
router.post('/login',authController.loginUser)

module.exports=router;