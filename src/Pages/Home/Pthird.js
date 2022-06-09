import React from 'react'
import image from '../../works/kung-ip.png'
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


export const Pthird = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className=''>
        <div>
            <img className='h-64 w-full' src={image} alt="" />
        </div>
        <div className='hover:bg-red-500 shadow-lg'>
            <h2 className="text-2xl text-left font-medium p-4">Kungfu IP</h2>
           <p className='text-justify mb-2 px-4'>
           This websites’ UI is made with Bootstrap for a martial art trainer, if you want to learn from him you can select a session and check out for that session with him.
          A basic authentication system is implemented with social and email-password based  user registation and login system.One user can process one checkout at one go.Wishing you a best martial art journey.
           </p>
           <div><button onClick={()=>navigate('/projects/kungfu')} className='p-4 my-4 rounded-full bg-black text-sky-500 hover:bg-white border hover:border-sky-500'><FiNavigation></FiNavigation></button></div>
        </div>
    </div>
</div>
  )
}
