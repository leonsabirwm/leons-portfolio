import React from 'react'
import admin from '../../works/amrap/adminRole.png';
import manage from '../../works/amrap/manage.png';
import testimonial from '../../works/amrap/testimonial.png';
import profile from '../../works/amrap/updateProfile.png';
import { FiInfo,FiGlobe,FiCode } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import { CgShortcut } from "react-icons/cg";

export const ProjectFirst = () => {
  return (
    <div className='mx-16'>
        <div>
            <h3 className="text-2xl lg:text-4xl">AMRAP Manufactures</h3>
        </div>
        <div>
           <div className='flex items-center justify-center my-4'>
           <h2 className="text-2xl"><CgShortcut></CgShortcut></h2>
           <h2 className="text-xl ml-2">Overview</h2>
           </div>
            <div className='mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                    <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Admin Role</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={admin} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Product Management</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={manage} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Reviews</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={testimonial} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Profile Updation</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={profile} alt="" />
                </div>
            </div>
                {/* Source Codes */}
                <div className='my-12'>
                    <h2 className="text-3xl my-8 underline underline-offset-4">Source Codes</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-48'>
                <a href="https://amrap-4349b.firebaseapp.com"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FiGlobe></FiGlobe>
                    </h2>
                    <h3 className="text-xl font-medium">Live Site</h3>
                </div>
                </a>
                <a href="https://github.com/leonsabirwm/amrap-manufectures-client"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FiCode></FiCode>
                    </h2>
                    <h3 className="text-xl font-medium">Client Code</h3>
                </div>
                </a>
                <a href="https://github.com/leonsabirwm/amrap-manufacturer-server"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FaServer></FaServer>
                    </h2>
                    <h3 className="text-xl font-medium ">Server Code</h3>
                </div>
                </a>
                </div>
                
            </div>
        </div>
        <div className='text-left my-16'>
            <h3 className="text-2xl underline underline-offset-8 my-4">Project Info :</h3>
            <ol type=''>
                <li>• This is a React Based Project for a Manufacturing Company.</li>

<li>• Their client can use this app for placing order and complete the payment and on the company's end they will be able to get inform about the order and order's status of payment and shipment.</li>

<li>
• It has rest APIs for operating CRUD operations in MongoDB.
</li>
<li>
• Payment gateway is intergrated through Stripe.
</li>
<li>
• Client can place orders for ceratain amout of products and they can cancel the order untill payment.
</li>

<li>
• Admin will be able to add or delete product of inventory and he has the authority to make any user admin.
</li>

<li>
• Admin has the authority to change a product delivery state from pending to shipped based on payment state.
</li>

<li>
• Admin level API call and admin access gets verified from backend.
</li>
<li>
• User or admin can update their profile with own information.
</li>
            </ol>
        </div>
    </div>
  )
}
