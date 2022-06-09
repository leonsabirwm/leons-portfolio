import React from 'react'
import './Banner.css'
import leon from '../../images/leo-image.jpg'
import { useNavigate } from 'react-router-dom'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Banner = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
  return (
    <div className="banner-container h-screen    flex justify-center items-center" >
         <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    
    
      options={{
        // 
        
        // 
        fullScreen: {
            enable:false,
            zIndex:-2,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        
      }}
    />
        <div className='grid grid-cols-1 lg:grid-cols-2 z-10 gap-4 lg:gap-44 mx-8 lg:mx-24'>
            
            <div className='flex items-center justify-center'>
                <img className='lg:h-96 h-56 rounded-3xl' src={leon} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h4 className='text-3xl lg:text-5xl font-medium lg:text-sky-500'> — I'M Leon <span className='text-white lg:text-sky-500'>Sabir</span>.</h4>
                <h4 className='text-3xl lg:text-5xl font-medium text-white text-right'>Web Developer</h4>
                <p className=' my-8 text-white text-lg text-justify'>I'm a Junior Mern Stack Developer who is exploring the way of web developement.I am enthusiastic about learning new technologies and implementing those in my projects.</p>
               <div className='flex '>
               <a target='_blank' rel='noreferrer' href='https://drive.google.com/u/0/uc?id=1sI9zLkAjn-5dCTzbJp0hN-xNWqbDaAve&export=download'><button className='btn-primary lg:border-0 border border-black'>Download Resume</button></a>
                <a className='ml-4' rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1sI9zLkAjn-5dCTzbJp0hN-xNWqbDaAve/view'><button className='btn-print border border-black lg:border-sky-500 lg:text-sky-500 p-4'>Print Resume</button></a>
               </div>
            </div>
        </div>
    </div>
  )
}
