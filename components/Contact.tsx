import React from 'react'
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import { postInfo } from '../typings';




type Props = {
    pageinfo : postInfo[],
}


type Inputs = {
    name: string,
    mobile: number,
    email: string,
    message:string,
  };

const Contact = ({pageinfo}: Props) => {

    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

  return (
    <div className='h-screen max-w-7xl mx-auto text-center relative flex flex-col md:text-left md:flex-row px-10 justify-evenly items-center'>
        <h3 className='absolute top-[80px] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4' >Contact</h3>
        <div className=' pt-32'>
            <h4 className='text-3xl font-semibold text-center'>I have got just what you need. <span className='underline decoration-[#F7AB0A]'> Let's Talk.</span>  </h4>

            <div className='space-y-6 mt-8'>
                <div className='flex items-center align-middle text-center justify-center space-x-6'>
                    <HiPhone className=' text-2xl text-[#F7AB0A]'/>
                    <p className='text-xl font-semibold text-center'>{pageinfo[0].phoneNumber}</p>
                </div>
                <div className='flex items-center align-middle text-center justify-center space-x-6'>
                    <HiMail className=' text-2xl text-[#F7AB0A]'/>
                    <p className='text-xl font-semibold text-center'>{pageinfo[0].email}</p>
                </div>
                <div className='flex items-center align-middle text-center justify-center space-x-6'>
                    <HiLocationMarker className=' text-2xl text-[#F7AB0A]'/>
                    <p className='text-xl font-semibold text-center'>{pageinfo[0].address}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto w-fit py-4'>
                <div className='space-x-2 flex'>
                    <input {...register("name")} placeholder='Name' className="textarea" type="text"/>
                    <input {...register("mobile")} placeholder="Contact No"className="textarea" type="text"/>
                </div>
                <input {...register("email")} placeholder="Email" className="textarea" type="text"/>
                <textarea {...register("message")} placeholder="Your message" className="textarea" />

                <button type='submit'className='herobtnsubmit mt-4'>Submit</button>

            </form>
        </div>


    </div>
  )
}


export default Contact