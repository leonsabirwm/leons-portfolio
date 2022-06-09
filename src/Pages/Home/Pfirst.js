import React from 'react'
import './Projects.css'
import image from '../../works/amrap.png'
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

export const Pfirst = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className=''>
            <div>
                <img className='h-64 w-full' src={image} alt="" />
            </div>
            <div className='hover:bg-sky-300 shadow-lg'>
                <h2 className="text-2xl font-medium p-4 text-left">AMRAP Manufatures</h2>
               <p className='text-justify mb-2 px-4'>
            A project to provide manufacturer company’s warehouse updates, stock products,take orders, and then on basis of payment status proceed them for the shipment process. Role-based operations are implemented in this app, it distinguishes between a userand an admin and transforms itself according to the role of the currently logged inperson.
               </p>
            <div><button onClick={()=>navigate('/projects/amrap')} className='p-4 my-4 rounded-full bg-black text-sky-500 hover:bg-white border hover:border-sky-500'><FiNavigation></FiNavigation></button></div>
            </div>
        </div>
    </div>
  )
}
