import React from 'react'
import { Pfirst } from './Pfirst'
import { Psecond } from './Psecond'
import { Pthird } from './Pthird'


export const Projects = () => {
  return (
    <div>
        <div className='m-16 grid gap-8 grid-cols-2'>
            <Pfirst></Pfirst>
            <Psecond></Psecond>
            <Pthird></Pthird>
        </div>
    </div>
  )
}
