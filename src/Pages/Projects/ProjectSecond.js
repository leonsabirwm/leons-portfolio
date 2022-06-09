import React from 'react'
import individual from '../../works/arsenal/individual.png';
import manage from '../../works/arsenal/management.png';
import authentication from '../../works/arsenal/authntication.png';
import additem from '../../works/arsenal/additem.png';
import { FiInfo,FiGlobe,FiCode } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import { CgShortcut } from "react-icons/cg";

export const ProjectSecond = () => {
  return (
    <div className='mx-16'>
        <div>
            <h3 className="text-2xl lg:text-4xl">Warrior's Arsenal</h3>
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
                    <h2 className='text-xl ml-2'>Authentication</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={authentication} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Stock Updation</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={additem} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Individual Updation</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={individual} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Manage Stock</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={manage} alt="" />
                </div>
            </div>
                {/* Source Codes */}
                <div className='my-12'>
                <h2 className="text-3xl my-8 underline underline-offset-4">Source Codes</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-48'>
                <a href="https://warriors-arsenal.web.app/"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FiGlobe></FiGlobe>
                    </h2>
                    <h3 className="text-xl font-medium">Live Site</h3>
                </div>
                </a>
                <a href="https://github.com/leonsabirwm/warriors-arsenal-client"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FiCode></FiCode>
                    </h2>
                    <h3 className="text-xl font-medium">Client Code</h3>
                </div>
                </a>
                <a href="https://github.com/leonsabirwm/warriors-arsenal-server.git"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FaServer></FaServer>
                    </h2>
                    <h3 className="text-xl font-medium">Server Code</h3>
                </div>
                </a>
                </div>
                
            </div>
        </div>
        <div className='text-left my-16'>
            <h3 className="text-2xl underline underline-offset-8 my-4">Project Info :</h3>
            <ol type=''>
            <li>• This is a single page application (SPA) for warehouse or inventory management.</li>
<li>
• It reveals some functionality such as Add Item,Manage Products,My Items based on authenticity of an user.
</li>
<li>
• An uthenticated user can add,deliver and restock products.
</li>
<li>
• If any new user registers then he will receive a verification email.
</li>
<li>
• This project also provides google based login process
    </li>            </ol>
        </div>
    </div>
  )
}
