import React from 'react'
import './Banner.css'
import leon from '../../images/leo-image.jpg'
import { useNavigate } from 'react-router-dom'

export const Banner = () => {
    
  return (
    <div className="banner-container h-screen flex justify-center items-center">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-44 mx-8 lg:mx-24'>
            <div className='flex items-center justify-center'>
                <img className='lg:h-96 h-56 rounded-3xl' src={leon} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h4 className='text-3xl lg:text-5xl font-medium lg:text-sky-500'> — I'M Leon <span className='text-white lg:text-sky-500'>Sabir</span>.</h4>
                <h4 className='text-3xl lg:text-5xl font-medium text-white text-right'>Web Developer</h4>
                <p className=' my-8 text-white text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis vitae mollitia cum eius qui quo quaerat asperiores provident similique vero, consequuntur enim quibusdam nemo doloremque. Modi repudiandae rem eligendi!</p>
               <div className='flex '>
               <a target='_blank' rel='noreferrer' href='https://drive.google.com/u/0/uc?id=1sI9zLkAjn-5dCTzbJp0hN-xNWqbDaAve&export=download'><button className='btn-primary lg:border-0 border border-black'>Download Resume</button></a>
                <a className='ml-4' rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1sI9zLkAjn-5dCTzbJp0hN-xNWqbDaAve/view'><button className='btn-print border border-black lg:border-sky-500 lg:text-sky-500 p-4'>Print Resume</button></a>
               </div>
            </div>
        </div>
    </div>
  )
}
