import React from 'react'
import { Pfirst } from './Pfirst'
import { Pfourth } from './Pfourth'
import { Psecond } from './Psecond'
import { Pthird } from './Pthird'


export const Projects = () => {
  return (
    <div>
        <div>
            <h3 className="mx-16 my-12 font-medium text-left text-3xl">My Projects</h3>
        </div>
        <div className='mx-4 lg:mx-16 grid gap-0 lg:gap-8 grid-cols-1 lg:grid-cols-3'>
            <Pfirst></Pfirst>
            <Psecond></Psecond>
            <Pthird></Pthird>
        </div>
    </div>
  )
}
