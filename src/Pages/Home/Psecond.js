import React from 'react'
import './Projects.css'
import image from "../../works/warrior-arsenal.png"
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


export const Psecond = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className='my-8 lg:my-0'>
        <div>
            <img className='h-64 w-full' src={image} alt="" />
        </div>
        <div className='hover:bg-gray-300 shadow-lg'>
        <h2 className="text-2xl font-medium p-4 text-left">Warrior' Arsenal</h2>
               <p className='text-justify mb-2 px-4'>
               CRUD operation with Node and MongoDB based this app has features like restocking products and delivering products and the data gets updated according to the actions.Custom increcment and decrement amount is processed by the app and that change manipulated the data in database which results into the continuous flow of data.
           </p>
           <div><button onClick={()=>navigate('/projects/arsenal')} className='p-4 my-4 rounded-full bg-black text-sky-500 hover:bg-white border hover:border-sky-500'><FiNavigation></FiNavigation></button></div>
        </div>
    </div>
</div>
  )
}
