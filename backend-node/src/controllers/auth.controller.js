const userModel=require("../models/user.model")
const jwt =require("jsonwebtoken")
const bcrypt=require("bcrypt");

async function registerUser(req,res){
    const {username,email,password}=req.body

    const doesUserExist=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(doesUserExist){
        return res.status(403).json({
            message:"Username or Email already exists"
        })
    }
    const hashPassword=await bcrypt.hash(password,10);

    const user=await userModel.create({
        username,
        email,
        password:hashPassword
    })
    
    const token=jwt.sign({id:user._id,username},process.env.JWT_SECRET_KEY,{expiresIn:"3h"})

    res.cookie("token",token)

    return res.status(201).json({
        "message":"user registered successfully",
        user
    })
}

async function loginUser(req,res){
    const {username,email,password}=req.body

    const user=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(409).json({
            "message":"user doesn't exists"
        })
    }

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(403).json({
            "message":"Wrong password"
        })
    }
        
    const token=jwt.sign({
        id:user._id,username
    },process.env.JWT_SECRET_KEY,{expiresIn:"3h"})
    
    res.cookie("token",token)
    return res.status(201).json({
        message:"User login successfully"
    })
}

async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(201).json({
        "message":"User Logout Successfully"
    })
}

module.exports={registerUser,loginUser,logoutUser}