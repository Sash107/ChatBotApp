'use client'
import React from "react";
import { useState,useEffect } from "react";

function login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    useEffect(()=>{
        console.log("email:",email)
        console.log("password:",password)
    },[email,password])
    return(
        <div className="bg-[#f4f3ea] max-w-screen min-h-screen flex flex-col">
            <div className="h-30 flex pr-[4%]">

                <div className="mx-0 px-8 py-8 items-center flex flex-col gap-2 justify-center w-1/6">
                    <div className="text-2xl font-bold">
                        Chat Bot App
                    </div>
                    <div className=" border-2 text-[#737373] w-full"></div>
                    <div className="text-l text-[#737373]">
                        chatbotapp@gmail.com
                    </div>
                </div>

                <div className="min-w-1/5 ml-auto p-3 flex h-20 items-center">
                    <div className="font-bold mx-auto  text-xl">
                        Signup
                    </div>
                    <div className="py-2 px-5  mx-auto font-bold bg-[#fdc987] rounded-xl text-l">
                        Request Demo
                    </div>
                </div>
            </div>

            <div className="border-2 flex-1 min-h-0 flex justify-center">
                <div className="w-[30%] h-[calc(0.85*(100vh-7rem))] min-h-0 rounded-4xl px-12 py-12 bg-white flex flex-col items-center">
                    <div className="text-3xl font-extrabold">
                        Agent Login
                    </div>
                    <div className="text-xl font-medium px-16 text-center mt-4 text-[#545454]">
                        Hey, Enter your details to get sign in to your account
                    </div>

                    <form action="" className="w-full mt-12">
                        <input type="text" placeholder="Enter Username / Email" className="text-black placeholder:text-[#545454] border-2 w-full h-12 px-6 border-[#d9d9d9] rounded-xl"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        <input type="text" placeholder="Enter Password" className="text-black placeholder:text-[#545454] border-2 w-full h-12 px-6 mt-4 border-[#d9d9d9] rounded-xl" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <div className="mt-8 font-medium text-[1rem] w-fit hover:cursor-pointer">
                            Having trouble in Sign in?
                        </div>
                        <button type="submit" className="bg-[#fdc987] w-full h-12 px-6 mt-8 rounded-xl hover:cursor-pointer">
                            Sign In
                        </button>
                        <div className="w-fit text-center font-medium mt-8 hover:cursor-pointer">
                            <span className="font-normal">
                            Don't have an account? 
                            </span>
                            &nbsp;Request Now
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default login;
