import React from 'react'
import componentBased from '../../works/kungfu/componentBased.png';
import checkout from '../../works/kungfu/checkout.png';
import authentication from '../../works/kungfu/authentication.png';
import email from '../../works/kungfu/email.png';
import { FiInfo,FiGlobe,FiCode } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import { CgShortcut } from "react-icons/cg";

export const ProjectThird = () => {
  return (
    <div className='mx-16'>
        <div>
            <h3 className="text-2xl lg:text-4xl">Kungfu IP</h3>
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
                    <h2 className='text-xl ml-2'>Bootstrap UI</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={email} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Component Based</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={componentBased} alt="" />
                </div>
                <div>
                <div className='flex my-2 items-center justify-center'>
                    <h2 className='text-2xl text-sky-500'><FiInfo></FiInfo></h2>
                    <h2 className='text-xl ml-2'>Checkout Option</h2>
                    </div>
                    <img className='hover:shadow-xl transition scale duration-200 hover:scale-105' src={checkout} alt="" />
                </div>
            </div>
                {/* Source Codes */}
                <div className='my-12'>
                <h2 className="text-3xl my-8 underline underline-offset-4">Source Codes</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-48'>
                <a href="https://kungfu-ip.web.app/"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FiGlobe></FiGlobe>
                    </h2>
                    <h3 className="text-xl font-medium">Live Site</h3>
                </div>
                </a>
                <a href="https://github.com/leonsabirwm/Kungfu-IP.git"
                target='_blank' rel='noreferrer'>
                <div className='flex flex-col justify-center items-center p-4 shadow-lg'>
                    <h2 className="text-3xl text-sky-500">
                    <FiCode></FiCode>
                    </h2>
                    <h3 className="text-xl font-medium">Client Code</h3>
                </div>
                </a>
               
                </div>
                
            </div>
        </div>
        <div className='text-left my-16'>
            <h3 className="text-2xl underline underline-offset-8 my-4">Project Info :</h3>
            <ol type=''>
            <li>
            • This is a single page application (SPA) for an independent martial art master.
            </li>
<li>
• Authentication based route or private route is intergrated in checkout process of any wished training.Only authenticated user can access that.
</li>
<li>
• The about section of this website is about the brief intro and goal of the developer.

</li>
<li>
• In navbar an logged in user can will get Sign Out Button to sign out from the app.
</li>
<li>
• This website is responsive for mobile and pc.So,user does not need to face hassle about UI while surfing the site.
</li>

</ol>
        </div>
    </div>
  )
}
