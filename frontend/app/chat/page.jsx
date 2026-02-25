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
    <div className='flex h-screen w-full'>
      <Sidebar className='w-[260px] border-r-2 scroll-auto'/>
      <div className='h-full w-full flex flex-col'>
        <div className='px-8 py-4 text-xl'>
          ChatBot App
        </div>
        <div className='flex h-full w-full border-2 items-center justify-center'>
          <div className='w-full translate-y-[-116px]'>
            <p className='text-3xl flex justify-center py-[32px]'>
            What are you working on?
            </p>
            <div className='w-full h-full flex px-[64px] py-[16px] border-2 justify-center'>
              <Chatbox className='border-2 w-[786px] h-min-[56px] rounded-4xl p-[10px] flex' onSend={handleSend}/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default chats