import React, { useEffect, useState } from 'react'
import { LuPlus } from "react-icons/lu";
import TextareaAutosize from 'react-textarea-autosize';
import { FaArrowUp } from "react-icons/fa6";

const Chatbox = ({className,onSend}) => {
  const [message,setMessage]=useState("");
  const handleInput=(e)=>{
      setMessage(e.target.value);
  }

  const handleSubmit=()=>{
    onSend(message)
  }
  return (
    <div className={`${className}`}>
      <div className='h-full flex items-center px-[10px] w-full'>
        <LuPlus className='text-[#555555] h-[36px] w-[36px] p-[4px]  rounded-[50%] hover:bg-[#f9f8f8]'/>
        <TextareaAutosize minRows={1} maxRows={10} className='focus:outline-none resize-none p-2 ml-[8px] w-full' placeholder='Ask Anything' onInput={handleInput} />
        <FaArrowUp className='h-[36px] w-[36px] p-[8px] border-2 rounded-[50%] text-white bg-black' onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Chatbox