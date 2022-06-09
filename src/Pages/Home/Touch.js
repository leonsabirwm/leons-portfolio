import React from 'react'
import { FiPhoneCall ,FiMapPin} from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import './Touch.css'

export const Touch = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
            <h3 className="text-3xl touch-title mt-16 shadow-lg p-4">Get In Touch</h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-36 my-12'>
            <div className='flex flex-col justify-center items-start shadow-lg p-4'>
                <h3 className='text-3xl text-sky-500'><FiMapPin></FiMapPin></h3>
                <h4 className="text-xl my-1">Address</h4>
                <p className="">Chattogram,Bangladesh</p>
            </div>
            <div className='flex flex-col justify-center items-start shadow-lg p-4'>
                <h3 className='text-3xl text-sky-500'><FiPhoneCall></FiPhoneCall></h3>
                <h4 className="text-xl my-1">Phone</h4>
                <p className="">+880 1875336249</p>
            </div>
            <div className='flex flex-col justify-center items-start shadow-lg p-4'>
                <h3 className='text-3xl text-sky-500'><BsEnvelope></BsEnvelope></h3>
                <h4 className="text-xl my-1">Email</h4>
                <p className="">leonhossan11@gmail.com</p>
            </div>
        </div>
    </div>

  )
}
