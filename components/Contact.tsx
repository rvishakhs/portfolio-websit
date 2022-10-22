import React from 'react'
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen max-w-7xl mx-auto text-center relative flex flex-col md:text-left md:flex-row px-10 justify-evenly items-center'>
        <h3 className='absolute top-[80px] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4' >Contact</h3>
        <div className=' pt-32'>
            <h4 className='text-3xl font-semibold text-center'>I have got just what you need. <span className='underline decoration-[#F7AB0A]'> Let's Talk.</span>  </h4>

            <div className='space-y-6 mt-8'>
                <div className='flex items-center align-middle text-center justify-center space-x-6'>
                    <HiPhone className=' text-2xl text-[#F7AB0A]'/>
                    <p className='text-xl font-semibold text-center'>+44 7442005972</p>
                </div>
                <div className='flex items-center align-middle text-center justify-center space-x-6'>
                    <HiMail className=' text-2xl text-[#F7AB0A]'/>
                    <p className='text-xl font-semibold text-center'>Rvishakhs@gmail.com</p>
                </div>
                <div className='flex items-center align-middle text-center justify-center space-x-6'>
                    <HiLocationMarker className=' text-2xl text-[#F7AB0A]'/>
                    <p className='text-xl font-semibold text-center'>63, Devonay Road, London</p>
                </div>
            </div>

            <form action="" className='flex flex-col space-y-2 mx-auto w-fit py-4'>
                <div className='space-x-2 flex'>
                    <input placeholder='Name' className="textarea" type="text"/>
                    <input placeholder="Contact No"className="textarea" type="text"/>
                </div>
                <input placeholder="Email" className="textarea" type="text"/>
                <textarea placeholder="Your message" className="textarea" />

                <button type='submit'className='herobtnsubmit mt-4'>Submit</button>

            </form>
        </div>


    </div>
  )
}


export default Contact