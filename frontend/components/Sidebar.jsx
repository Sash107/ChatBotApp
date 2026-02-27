import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { PiNotePencil } from "react-icons/pi";
import { useParams, useRouter } from 'next/navigation';

const Sidebar = ({className}) => {
  const {chatId}=useParams();
  const [allConversation,setAllConversation]=useState([]);
  const router=useRouter();

  useEffect(()=>{
    console.log(allConversation)
    console.log(chatId)
  },[allConversation])

  useEffect(()=>{

    const getConversation=async ()=>{
      const uri="http://localhost:3000/api/chat/all-conversation"
      const response=await axios.get(uri,{withCredentials:true});
      setAllConversation(response.data.allConversation)
    }

    getConversation();
  },[])

  return (
    <div className={`flex flex-col bg-[#f9f8f8] border-[#E5E4E2] ${className}`}>
        <div className='h-[64px]' >
        </div>
        <div className='flex-1 flex flex-col border-2 min-h-0'>
          <div className='px-[4px]'>
            <div className='w-full p-[8px] mt-[12px] text-md flex items-center gap-[8px] rounded-xl hover:bg-[#eaeaea] hover:cursor-pointer'>
              <PiNotePencil size={24}/>
              New Chat
            </div>
          </div>

          <div className='w-full px-[4px] flex-1 flex flex-col mt-[32px] overflow-auto min-h-0'>
            <p className='text-[#777777] px-[4px] text-sm pl-[8px]'>Your Chats</p>
            {
              allConversation.map((conv,index)=>{
                return(
                  <div className={`w-full h-[40px] p-[8px] pl-[12px] mt-[12px] text-md flex rounded-xl hover:bg-[#eaeaea] hover:cursor-pointer overflow-hidden ${chatId==conv._id?"bg-[#eaeaea] hover:bg-[#ededed]":""}`} onClick={()=>{
                    const page_id_url="http://localhost:3001/chat/"+conv._id
                    console.log(page_id_url)
                    router.push(page_id_url)
                  }}>
                    {conv.title}
                  </div>
                  )})
            }
          </div>
        </div>
    </div>
  )
}

export default Sidebar