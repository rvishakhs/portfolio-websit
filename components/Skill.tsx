import React from 'react'
import { motion } from 'framer-motion'
import { skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    direction : boolean
    data : skill
}

export default function Skill({direction, data}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img

            initial={{
                x: direction? -200 : 200,
                opacity:0
            }}

            transition={{
                duration:1.5
            }}

            whileInView ={{
                opacity:1,
                x:0
            }}
        
        
            src={urlFor(data.image).url()}
            className='rounded-full w-20 h-20 md:w-24 md:h-24 border border-gray-500 opacity-100 object-cover 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0  group-hover:opacity-80 transition duration-300 ease-in-out 
        group-hover:bg-white z-0 rounded-full w-20 h-20 md:w-24 md:h-24 '>
            <div className='flex items-center justify-center h-full'>
                <p className='font-bold text-2xl md:text-3xl text-black opacity-100'>{data.progress}</p>
            </div>
        </div>
    </div>
  )
}

