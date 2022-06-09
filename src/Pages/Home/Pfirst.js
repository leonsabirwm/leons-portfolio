import React from 'react'
import './Projects.css'

export const Pfirst = () => {
  return (
    <div className='projectFirst flex justify-center'>
        <div className='h-72 flex flex-col justify-between items-center'>
            <div className='project-desc text-white'>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates necessitatibus quasi voluptate eligendi facere est, adipisci, a, laborum numquam temporibus dolore unde culpa.</p>
            </div>
            <div className='w-full'>
                <button className='w-full text-white details-btn'>Details</button>
            </div>
        </div>
    </div>
  )
}
