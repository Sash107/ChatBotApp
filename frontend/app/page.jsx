import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function root(){
  const cookieStore=await cookies();
  const token=cookieStore.get("token")
  if(!token)redirect('/login')
  redirect('/chat')
  return(
    <div>
      Welcome to the chatbot app
    </div>
  )
}

export default root;