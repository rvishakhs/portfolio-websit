import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 

        initial={{
            opacity:0
        }}

        whileInView={{
            opacity:1
        }}

        transition={{
            duration:1.5
        }}

        className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center px-6'>
        <h3 className='absolute top-16 uppercase tracking-[15px] md:tracking-[20px]  text-gray-500 text-2xl pb-4' >Skills</h3>

        <h4 className='absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm mb-6'>Hover over a skill for proficency</h4>

        <div className='grid grid-cols-4 gap-5 top-6'>
            <Skill direction={true}/>
            <Skill direction={true}/>
            <Skill direction={true}/>
            <Skill direction={true}/>
            <Skill direction={true}/>
            <Skill direction={false}/>
            <Skill direction={false}/>
            <Skill direction={false}/>
            <Skill direction={false}/>
            <Skill direction={false}/>
            <Skill direction={false}/>


        </div>


    </motion.div>
  )
}

export default Skills
