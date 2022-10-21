import Link from 'next/link'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {

    const projects = [1,2,3,4,5]

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-[70px] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4' > Projects </h3>

        <div 
            className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'
        />

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, index ) =>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-start p-20 md:p-44 h-screen '>
                    <img 
                        src='https://miro.medium.com/max/1400/1*8BtlgpxyjOPaLZXO6pVD0Q.jpeg'
                        alt=' '
                        className='w-96 h-72 object-fill'
                    />
                    <div className=''>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Case study {index + 1} of {projects.length}  </span> {" "} :
                            Netflix Clone
                        </h4>
                    </div>

                    <div className=''>
                        <Link href="#projects">
                           <button className='herobtn'>More details</button>
                        </Link>
                    </div>


                </div>

            ) )}

        </div>

    </div>
  )
}

export default Projects
