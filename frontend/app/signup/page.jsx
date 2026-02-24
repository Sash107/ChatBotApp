import React from 'react'

const signup = () => {
  return (
    <div className='bg-[#f4f3ea] min-h-screen w-full flex flex-col'>
        <div className='h-30 flex pr-[4%]'>
            <div className='pt-4 pl-8'>
                <div className='font-bold text-2xl p-2'>
                    Chat Bot App
                </div>
                <div className='border-2 text-[#737373] w-full'></div>
                <div className='text-md text-center mt-2 text-[#737373]'>
                    chatbotapp@gmail.com
                </div>
            </div>
            <div className='ml-auto text-center px-2 h-20 pt-6 sm:pt-4 flex flex-col gap-2 sm:flex-row sm:gap-8 items-center'>
                <div className='text-xl font-bold'>
                    Signup
                </div>
                <div className='rounded-lg text-sm p-2 bg-[#fdc987] font-bold px-5 flex items-center'>
                    Request Demo
                </div>
            </div>
        </div>
        <div className='flex flex-col p-2 items-center w-full'>
            <div className='w-full max-w-120 bg-white h-160 pt-8 rounded-xl border-2 sm:'>
                <div className='text-3xl font-extrabold p-2  text-center'>
                    Agent Login
                </div>
                <div className=' px-16 text-xl font-medium text-center text-[#737373]'>
                    Hey, Enter your details to get Sign In to your account
                </div>
                <form className='items-center w-full flex flex-col border-2 pt-16 px-4 gap-4'>
                    <input type="text" className='h-12 border-2 w-full' placeholder='Enter Email'/>
                    <input type="text" className='h-12 border-2 w-full' placeholder='Enter Password'/>

                </form>
            </div>
        </div>
    </div>
  )
}

export default signup