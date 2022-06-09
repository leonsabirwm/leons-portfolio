import React from 'react'
import { Banner } from './Banner'
import { Connect } from './Connect'
import { Projects } from './Projects'
import { Touch } from './Touch'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Projects></Projects>
        <Touch></Touch>
        <Connect></Connect>
    </div>
  )
}
