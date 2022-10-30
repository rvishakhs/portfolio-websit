import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { experience } from '../typings'

type Props = {
    experience : experience[]
}

const Experience = ({experience}: Props) => {
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
        className="h-screen flex top-4 relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
        <h3 className='absolute top-9 uppercase tracking-[15px] md:tracking-[20px]  text-gray-500 text-2xl pb-4' >Experience</h3>

        <div className='w-full space-x-20 p-10 snap-x snap-mandatory overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-[#F7AB0A] flex mt-12'>    
            {experience.map((exp) => (
                <ExperienceCard 
                    key={exp._id}
                    experience = {exp}
                />
            ) )}

        </div>
        
    </motion.div>
  )
}


export default Experience