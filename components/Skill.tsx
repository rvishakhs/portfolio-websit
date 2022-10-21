import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    direction : boolean
}

export default function Skill({direction}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
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
        
        
            src='https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png'
            className='rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 border border-gray-500 opacity-100 object-cover 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0  group-hover:opacity-80 transition duration-300 ease-in-out 
        group-hover:bg-white z-0 rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'>
            <div className='flex items-center justify-center h-full'>
                <p className='font-bold text-3xl text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}
