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
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
        <Background />
        <img 
            src='https://avatars.githubusercontent.com/u/56556101?v=4'
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
        />
        <h2 className='text-4xl font-semibold'>
            <span>
                {text}
            </span>
                <Cursor cursorColor='#FF0000'/>
        </h2>
    </div>
  )
}

export default Hero