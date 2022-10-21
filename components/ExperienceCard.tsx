import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center snap-center bg-[#292929] flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] p-6
    opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
        <motion.img
            initial={{
                y:-100,
                opacity:0
            }}

            whileInView={{
                y:0,
                opacity:1
            }}

            transition={{
                duration:1
            }}

            viewport={{
                once: true
            }}


        
            src='https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png'
            className='w-32 h-32 mx-auto rounded-full object-cover object-center '
        />
        <div className='space-y-2 px-0 md:px-10'>
            <h2 className='text-2xl font-light'>Freelance Developer</h2>
            <p className='mx-auto font-bold text-lg '>Upwork</p>
            <div className='flex space-x-2'>
                <img 
                    src="https://i.pinimg.com/736x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg" 
                    alt="" 
                    className='h-8 w-8 rounded-full'
                />
                <img 
                    src="https://i.pinimg.com/736x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg" 
                    alt="" 
                    className='h-8 w-8 rounded-full'
                />
                <img 
                    src="https://i.pinimg.com/736x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg" 
                    alt="" 
                    className='h-8 w-8 rounded-full'
                />
            </div>

            <p className='uppercase py-5 text-gray-300'>Start from sep 2022 to now </p>

            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Bullent Points</li>
                <li>Bullent Points</li>
                <li>Bullent Points</li>
                <li>Bullent Points</li>
                <li>Bullent Points</li>
            </ul>
        
        </div>


    </article>
  )
}

export default ExperienceCard