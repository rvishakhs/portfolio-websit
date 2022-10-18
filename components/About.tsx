import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen max-w-7xl mx-auto text-center relative flex flex-col md:text-left md:flex-row px-10 justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ' >About</h3>
        <motion.img 
            initial={{
                x: -200,
                opacity: 0
            }}

            transition = {{
                duration: 1.2  
            }}

            whileInView = {{
                opacity: 1,
                x: 1,
            }}

            viewport ={{
                once: true
            }}

            src='https://avatars.githubusercontent.com/u/56556101?v=4'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95  lg:w-[400px] lg:h-[500px] object-cover '
        />
    </div>
  )
}

export default About