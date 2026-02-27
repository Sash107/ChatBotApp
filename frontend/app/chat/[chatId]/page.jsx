'use client';
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { useParams,useRouter } from 'next/navigation';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import Chatbox from '../../../components/Chatbox';

const ChatPage = () => {
    const {chatId}=useParams();
    const [Allmessages,setAllMessages]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const messageEndRef=useRef(null);
    const router=useRouter();

    const handleSend=async (msg)=>{
        const trimmed=msg.trim()

        if(!trimmed)return
        if(isLoading)return

        const url="http://localhost:3000/api/chat/send-message"

        setAllMessages((prev)=>{
            return [...(prev || []), {
                content: msg,
                createdAt:Date.now(),
                role: "user"
            }]
        })
        try{
            setIsLoading(true);
            const response=await axios.post(url,{"message":msg,"conversationId":chatId},{withCredentials:true});
            setIsLoading(false);
            setAllMessages((prev)=>{
                return [...(prev || []), {
                    content: response.data.reply,
                    createdAt:Date.now(),
                    role: "assistant"
                }]
            })
        }catch(err){
            console.log(err.data.messages)
            setIsLoading(false);
        }
    }
    
    useEffect(()=>{
        messageEndRef.current?.scrollIntoView({behavior:"smooth"}) ;   
    },[Allmessages])
    
    useEffect(()=>{
        if(!chatId)return
        const getmessages=async ()=>{
        try{
            const url = "http://localhost:3000/api/chat/all-message-in-conversation/" + chatId
            const response=await axios.get(url,{withCredentials:true})
            setAllMessages(response.data.messages)
        }catch(err){
            console.log(err.response)
            alert("Could not fetch conversation")
        }
        }
        getmessages()
    },[chatId])

    
  return (
    <div className='flex h-screen w-full'>
        <Sidebar className='hidden h-full md:block w-[256px] shrink-0 border-r-2 scroll-auto'/>
        <div className='h-full w-full flex flex-col items-center'>
            <div className='w-full px-8 py-4 text-xl'>
                ChatBot App
            </div>
            <div className='flex-1 flex flex-col w-full md:w-[512px] lg:w-[640px] xl:w-[768px] overflow-y-auto pt-4'>
                <div className='flex flex-col mt-auto w-full'>
                {
                    Allmessages.map((message,index)=>{
                        return(<div key={index} className='w-full '>
                            {
                                message.role=="user"?(
                                    <div className='mt-[32px] w-fit ml-auto rounded-2xl p-[4px] px-[16px] mb-[32px] bg-[#E5E4E2]'>
                                        {message.content}
                                    </div>
                                ):(
                                    
                                    <div>
                                        <ReactMarkdown>
                                            {message.content}
                                        </ReactMarkdown>
                                        <div className='px-[64px] mt-[32px] mb-[32px]'>
                                            <div className='border-b border-[#808080]' ></div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>)
                    })
                }
                {
                isLoading&&(<div className='animate-pulse'>
                            Assistant is Typing...
                            <div className='px-[64px] mt-[32px]'>
                            </div>
                        </div>)
                }
                <div ref={messageEndRef}/>
                </div>
            </div>
            <Chatbox className='border-2 w-full md:w-[512px] lg:w-[640px] xl:w-[768px] min-h-[40px] rounded-4xl p-[10px] flex' onSend={handleSend}/>
            <div className='pb-[4px] text-xs md:text-sm text-[#808080]'>
                ChatBot App can make mistakes. Check important info.
            </div>
        </div>
    </div>
  )
}

export default ChatPage