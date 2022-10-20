import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-[70px] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4' > Projects </h3>

        <div 
            className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'
        />

    </div>
  )
}

export default Projects
