import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Background from './Background'

type Props = {}

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Visakh SR",
            "Guy-who-loves-coffee.tsx",
            "<But_Loves_To CodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
      })


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center max-w-7xl mx-auto '>
        <Background />
        <img 
            src='https://avatars.githubusercontent.com/u/56556101?v=4'
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
        />

        <h2  className='text-gray-500 font-semibold pb-2 tracking-[15px] text-sm uppercase '>Web developer </h2>
            <h2 className='text-4xl font-semibold px-2 z-20'>
                <span className='mr-3 '>
                    {text}
                </span>
                    <Cursor cursorColor='#FF0000'/>
            </h2>

            <div className='pt-4 z-20'>
                <Link href="#hero">
                    <button className='herobtn'>About</button>
                </Link>
                <Link href="#Expereince">
                    <button className='herobtn'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='herobtn'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='herobtn'>Projects</button>
                </Link>
            </div>
        

    </div>
  )
}

export default Hero