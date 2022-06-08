import React from 'react'
import './Banner.css'
import leon from '../../images/leo-image.jpg'
import { useNavigate } from 'react-router-dom'

export const Banner = () => {
    
  return (
    <div className="banner-container h-screen flex justify-center items-center">
        <div className='grid grid-cols-2 gap-44 mx-24'>
            <div className='flex items-center justify-center'>
                <img className='h-96 rounded-3xl' src={leon} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h4 className='text-5xl font-medium text-primary'> — I'M Leon Sabir.</h4>
                <h4 className='text-5xl font-medium text-white text-right'>Web Developer</h4>
                <p className=' my-8 text-white text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis vitae mollitia cum eius qui quo quaerat asperiores provident similique vero, consequuntur enim quibusdam nemo doloremque. Modi repudiandae rem eligendi!</p>
               <div className='flex '>
               <a target='_blank' href='https://drive.google.com/u/0/uc?id=1sI9zLkAjn-5dCTzbJp0hN-xNWqbDaAve&export=download'><button className='btn-primary'>Download Resume</button></a>
                <a className='ml-4' target='_blank' href='https://drive.google.com/file/d/1sI9zLkAjn-5dCTzbJp0hN-xNWqbDaAve/view'><button className='btn-print p-4'>Print Resume</button></a>
               </div>
            </div>
        </div>
    </div>
  )
}
