'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const signin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [seePassword,setSeePassword]=useState(false);
    const router=useRouter();

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            const response=await axios.post('http://localhost:3000/api/auth/login',{email,password},{withCredentials:true})

            console.log(response.data)
            router.push('/chat')
        }catch(err){
            console.log(err.response.data);
        }

    }

  return (
    <div className='bg-[#f4f3ea] min-h-screen w-full flex flex-col'>
        <div className='h-30 flex pr-[4%]'>
            <div className='pt-4 pl-8'>
                <div className='font-bold text-2xl p-2 hover:cursor-pointer'>
                    Chat Bot App
                </div>
                <div className='border-2 text-[#737373] w-full'></div>
                <div className='text-md text-center mt-2 text-[#737373] hover:cursor-pointer'>
                    chatbotapp@gmail.com
                </div>
            </div>
            <div className='ml-auto text-center px-2 h-20 pt-6 sm:pt-4 flex flex-col gap-2 sm:flex-row sm:gap-8 items-center'>
                <div className='text-xl font-bold hover:cursor-pointer' onClick={e=>router.push('/signup')}>
                    Sign Up
                </div>
                <div className='rounded-lg text-sm p-2 bg-[#fdc987] font-bold px-5 flex items-center hover:cursor-pointer'>
                    Request Demo
                </div>
            </div>
        </div>
        <div className='flex flex-col p-2 items-center w-full'>
            <div className='w-full max-w-120 bg-white h-160 pt-8 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                <div className='text-3xl font-extrabold p-2  text-center'>
                    Agent Login
                </div>
                <div className=' px-16 text-xl font-medium text-center text-[#737373]'>
                    Hey, Enter your details to get Sign In to your account
                </div>

                <form className='items-center w-full flex flex-col text-black pt-16 px-4 gap-4' onSubmit={handleSubmit}>
                    <input type="text" className='h-12 border-2 w-full px-4 placeholder:text-[#545454] border-[#d9d9d9] rounded-xl' placeholder='Enter Email' onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <div className='w-full h-12 border-2 flex items-center border-[#d9d9d9] rounded-xl pr-4'>
                        <input type={seePassword?'text':'password'} className='h-full w-full px-4 placeholder:text-[#545454] rounded-xl' placeholder='Enter Password' onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <span className='hover:cursor-pointer' onClick={()=>{setSeePassword(!seePassword)}}>
                            {seePassword?<FaEyeSlash size={24} className='h-8 text-[#545454]'/>:
                            <FaEye size={24} className='h-8 text-[#545454]'/>}
                        </span>
                    </div>
                    
                    <div className='mr-auto mt-4 font-medium hover:cursor-pointer'>
                        Having touble in Sign In?
                    </div>
                    <button type='submit' className='hover:cursor-pointer mt-8 h-12 w-full bg-[#fdc987] rounded-xl font-bold shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                        Sign In
                    </button>
                </form>
                <div className='text-center mt-6'>
                    --OR--
                </div>
                <div className='text-center mt-4'>
                    <Link href="/signup" className='text-lg font-medium'>
                        Create an account
                    </Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default signin