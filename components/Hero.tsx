import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
    <div>
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