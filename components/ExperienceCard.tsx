import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { experience } from '../typings'

type Props = {
    experience : experience
   
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center snap-center bg-[#292929] flex-shrink-0 w-[400px] md:w-[650px] xl:w-[800px] p-6
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


        
            src={urlFor(experience.profilePic).url()}
            className='w-32 h-32 mx-auto rounded-full object-cover object-center '
        />
        <div className='space-y-2 px-0 md:px-10'>
            <h2 className='text-2xl font-light text-center'>{experience.jobTitle}</h2>
            <p className='mx-auto font-bold text-lg '>{experience.companyImage}</p>
            <div className='flex space-x-2'>
                {/* {experience.technologies.map((technology, index) => (
                    <img 
                        key={index}
                        src= {urlFor(technology).url()}
                        alt="" 
                        className='h-8 w-8 rounded-full'
                    />
                ))} */}
            </div>

            <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} {"-"} { experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()} </p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                {experience.points.map((point: any, i: any) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>

        
        </div>


    </article>
  )
}

export default ExperienceCard