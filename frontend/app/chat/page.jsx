'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Chatbox from '../../components/Chatbox';

const chats = () => {
  const [seeSidebar,setSeeSidebar]=useState(true);
  const [allConversation,setAllConversation]=useState([]);
  const [message,setMessage]=useState("");

  const handleSend=(data)=>{
    setMessage(data)
  }
  return (
    <div className='flex h-screen w-full bg-amber-300 border-2'>
      <Sidebar className='hidden h-full md:block w-[260px] shrink-0 border-r-2 scroll-auto'/>
      <div className='h-full flex-1 flex flex-col'>
        <div className='px-8 py-4 text-xl'>
          ChatBot App
        </div>

        <div className='flex h-full flex-1 items-center justify-center bg-amber-800'>
          <div className='flex-1 flex flex-col translate-y-[-116px]'>
            <p className='text-3xl flex justify-center py-[32px]'>
            What are you working on?
            </p>
            <div className='w-full h-full flex px-[64px] md:px-[32px] py-[16px]  justify-center'>
              <Chatbox className='border-2 w-[500px] md:w-[400px] lg:w-[600px] h-min-[56px] rounded-4xl p-[10px] flex' onSend={handleSend}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default chats