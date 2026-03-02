const express=require("express");
const authRouter=require("./routes/auth.routes")
const chatRouter=require("./routes/chat.routes")
const cookieParser=require("cookie-parser")
const cors=require("cors")

const app=express();

app.use(cors(
    {
        origin:"http://localhost:5000",
        credentials:true
    }
))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use('/api/chat',chatRouter);

module.exports=app;