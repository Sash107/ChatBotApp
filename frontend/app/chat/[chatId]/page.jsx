'use client';
import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { useParams } from 'next/navigation';
import axios from 'axios';

const ChatPage = ({params}) => {
    const {chatId}=useParams();
    const [messages,setMessages]=useState([]);
    const url = "http://localhost:3000/api/chat/all-message-in-conversation/" + chatId

    useEffect(()=>{
            console.log(messages)
    },[messages])
    useEffect(()=>{
        const getmessages=async ()=>{
        try{
            const response=await axios.get(url,{withCredentials:true})
            setMessages(response.data.messages)
        }catch(err){
            console.log(err.response)
            alert("Could not fetch conversation")
        }
        }
        getmessages()
    },[chatId])

    const handlepost=()=>{

    }
  return (
    <div className='flex h-screen w-full bg-amber-300'>
      <Sidebar className='hidden h-full md:block w-[256px] shrink-0 border-r-2 scroll-auto'/>
        <div className='h-full w-full flex flex-col items-center'>
            <div className='w-full px-8 py-4 text-xl bg-amber-100'>
                ChatBot App
            </div>
            <div className='h-full flex flex-col w-full md:w-[512px] lg:w-[640px] xl:w-[768px] lg:w- bg-amber-700 '>
                
            </div>
        </div>
    </div>
  )
}

export default ChatPage