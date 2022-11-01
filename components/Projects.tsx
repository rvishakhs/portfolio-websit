import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects : project[]
}

const Projects = ({projects}: Props) => {

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-[70px] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4' > Projects </h3>

        <div 
            className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'
        />

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-thumb-[#F7AB0A] '>
            {projects.map((project, index ) =>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-start mt-10 md:mt-0 p-20 md:p-44 h-screen  '>
                    <motion.img 
                                initial={{
                                y: -200,
                                opacity:0
                            }}
                
                            transition={{
                                duration:1
                            }}
                
                            whileInView ={{
                                opacity:1,
                                y:0
                            }}

                        src={urlFor(project.image).url()}
                        alt=' '
                        className='w-72 h-56 md:w-96 md:h-72 object-fill'
                    />
                    <div className=''>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Case study {index + 1} of {projects.length}  </span> {" "} : {" "}
                            {project.tittle}
                        </h4>
                    </div>

                    <div className='flex items-center space-x-2'>
                        {project.technologies.map((technology) => (
                            <img 
                                src={urlFor(technology.image).url()}
                                alt="technology"
                                className='h-10 w-10'
                            />
                        ))}
                    </div>


                    <p className='text-sm text-justify'>{project.summary}</p>

                    <div className=''>
                        <Link href="#projects">
                           <button className='herobtn'>Visit </button>
                        </Link>
                    </div>


                </div>

            ) )}

        </div>

    </div>
  )
}

export default Projects
