import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen max-w-7xl mx-auto text-center relative flex flex-col md:text-left md:flex-row px-10 justify-evenly items-center'>
        <h3 className='absolute top-[70px] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4' >About</h3>
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
            className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 mt-10 rounded-full md:rounded-lg md:w-[250px] md:h-[300px]  lg:w-[300px] lg:h-[400px] object-cover '
        />

        <div className='space-y-4 md:space-y-10 px-0 md:px-10'>
                <h4 className='lg:text-4xl md:text-2xl font-semibold'>Here is a{" "} <span className='underline decoration-[#F7AB0A]'>Little</span>{" "}Background</h4>
                <p className='text-sm md:text-base text-justify '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa magni eius vero et cumque magnam facere mollitia, repudiandae tenetur doloribus eveniet dolore fuga corporis consectetur qui dolores deserunt inventore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestias laboriosam iure numquam exercitationem officiis dolore illum ad? Nihil sunt voluptatum ducimus. Qui eos autem, quasi provident nemo esse atque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa, illum est laboriosam quibusdam aliquam maiores iste atque consequuntur voluptate placeat, ducimus excepturi aut sunt accusamus rerum odit nisi dolore!
                </p>
        </div>
    </div>
  )
}

export default About