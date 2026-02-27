import React, { useEffect, useState } from 'react'
import { LuPlus } from "react-icons/lu";
import TextareaAutosize from 'react-textarea-autosize';
import { FaArrowUp } from "react-icons/fa6";

const Chatbox = ({className,onSend}) => {
  const [message,setMessage]=useState("");
  const handleInput=(e)=>{
      setMessage(e.target.value);
  }

  const handleSubmit=(e)=>{
    onSend(message)
    setMessage("")
  }
  return (
    <div className={`${className}`}>
      <div className='h-full flex items-center px-[10px] w-full'>
        <LuPlus className='text-[#555555] h-[36px] w-[36px] p-[4px]  rounded-[50%] hover:bg-[#f9f8f8] hover:cursor-pointer'/>
        <TextareaAutosize minRows={1} maxRows={10} className='focus:outline-none resize-none p-2 ml-[8px] w-full' placeholder='Ask Anything' value={message} onChange={handleInput} onKeyDown={(e)=>{
          if(e.key==="Enter" && !e.shiftKey){
            e.preventDefault();
            handleSubmit(e);
          }
        }}/>
        <FaArrowUp className='h-[36px] w-[38px] p-[8px] rounded-[50%] text-white bg-black hover:cursor-pointer' onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Chatbox