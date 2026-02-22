const jwt=require("jsonwebtoken")

async function authMiddleware(req,res,next){
    try{
        const token=req.cookies.token
        if(!token){
           return res.status(403).send({
            message:"Unauthorized: No token provided" 
        }) 
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=decoded

        next()

    }catch(err){
        return res.status(403).send({
            message:"Unauthorized: Invalid or expired token"
        })
    }
}

module.exports=authMiddleware