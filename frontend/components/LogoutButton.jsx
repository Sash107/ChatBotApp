import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'
const LogoutButton = ({className}) => {
  const router=useRouter()
  const handleClick=async()=>{
    try{
      const response=await axios.post("http://localhost:3000/api/auth/logout",{},{withCredentials:true})
      console.log(response)
      router.push('/login')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={`${className} h-[32px] rounded-lg font-medium bg-[#dddddd] hover:bg-[#eaeaea] hover:cursor-pointer px-[24px] py-[8px] flex items-center`} onClick={handleClick}>
      Logout
    </div>
  )
}

export default LogoutButton