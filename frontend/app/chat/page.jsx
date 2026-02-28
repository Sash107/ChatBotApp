'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Chatbox from '../../components/Chatbox';
import LogoutButton from '../../components/LogoutButton';

const chats = () => {
  const [seeSidebar,setSeeSidebar]=useState(true);
  const [allConversation,setAllConversation]=useState([]);
  const [message,setMessage]=useState("");

  const handleSend=(data)=>{
    setMessage(data)
  }
  return (
    <div className='flex h-screen w-full border-2'>
      <Sidebar className='hidden h-full md:flex w-[260px] shrink-0 border-r-2 scroll-auto'/>
      <div className='h-full flex-1 flex flex-col'>
        <div className='flex'>
          <div className='px-8 py-4 text-xl'>
          ChatBot App
          </div>
          <div className='ml-auto flex h-full items-center py-[8px] px-[32px]'>
            <LogoutButton className=""/>
          </div>
        </div>
        

        <div className='flex h-full flex-1 items-center justify-center'>
          <div className='flex-1 flex flex-col translate-y-[-116px]'>
            <p className='text-3xl flex justify-center py-[32px]'>
            What are you working on?
            </p>
            <div className='w-full h-full flex flex-col px-[32px] md:px-[32px] py-[16px] items-center justify-center'>
              <Chatbox className='border-2 w-full md:w-[448px] lg:w-[640px] xl:w-[768px] min-h-[40px] rounded-4xl p-[10px] flex' onSend={handleSend}/>
              <div className='pb-[4px] text-xs mt-[8px] md:text-sm text-[#808080] hover:cursor-pointer'>
                  ChatBot App can make mistakes. Check important info.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default chats