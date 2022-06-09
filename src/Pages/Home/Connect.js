import React from 'react'
import { useForm } from 'react-hook-form';
import { FiFacebook,FiInstagram,FiLinkedin } from "react-icons/fi";

export const Connect = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

  return (
    <div className='mx-16'>
        <div className='flex justify-between'>
            <div className='flex flex-col items-start'>
                <h3 className="text-3xl my-4">Let's Connect</h3>
                <div className='flex items-center'>
                    <h2 className="text-blue-600 text-3xl border-black p-2 rounded-full inline-block border-2"><FiFacebook></FiFacebook></h2>
                    <h2 className="ml-2 text-xl">Facebook</h2>
                </div>
                <div className='flex items-center my-4'>
                <h2 className="text-pink-600 text-3xl border-black p-2 rounded-full inline-block border-2"><FiInstagram></FiInstagram></h2> 
                <h2 className="ml-2 text-xl">Instagram</h2>

                </div>
                <div className='flex items-center'>
                <h2 className="text-3xl text-sky-700 border-black p-2 rounded-full inline-block border-2"><FiLinkedin></FiLinkedin></h2> 
                <h2 className="ml-2 text-xl">LinkedIn</h2>

                </div>
            </div>
            <div className=''>
                <h3 className="text-3xl mb-4">Send Me Message</h3>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                    <input type="text" placeholder='Your Name' className='border-black rounded border mb-4 h-8'  {...register("name")} required />
                    <input type="text" placeholder='Your Email' className='border-black rounded border h-8' {...register("email", { pattern:  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
                    <p className='text-sm text-red-600 mt-2'>{errors.email?.type === 'pattern' && "Insert a valid email"}</p>
                    <textarea type="text" placeholder='Your Message' className='border-black rounded border my-4 h-24' {...register("message")} required />
                    <button className='bg-sky-500 text-white p-3'>Send Message</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
