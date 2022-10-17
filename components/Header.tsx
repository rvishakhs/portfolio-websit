import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center p-2 md:p-5'>
        <motion.div 
            className='flex items-center flex-row'
            initial={{
                x: -500,
                opacity:0,
                scale: 0.5,
            }}

            animate={{
                x:0,
                opacity:1,
                scale:1,    
            }}

            transition={{
                duration:1.5
            }}
        >
            
            <SocialIcon 
                url="https://twitter.com/rvishakhs" 
                network='twitter'
                bgColor='transparent'
                fgColor='gray'
            />
            <SocialIcon 
                url="https://www.facebook.com/rvishakhs" 
                network='facebook'
                bgColor='transparent'
                fgColor='gray'
            />
            <SocialIcon 
                url="https://www.instagram.com/visakhsr1996/" 
                network='instagram'
                bgColor='transparent'
                fgColor='gray'
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/visakh-sr-6766b4142/" 
                network='linkedin'
                bgColor='transparent'
                fgColor='gray'
            />
            <SocialIcon 
                url="https://github.com/rvishakhs" 
                network='github'
                bgColor='transparent'
                fgColor='gray'
            />
        </motion.div>

        <motion.div 
            className='flex flex-row items-center text-gray-300 cursor-pointer'

            initial={{
                x: 500,
                opacity:0,
                scale: 0.5,
            }}

            animate={{
                x:0,
                opacity:1,
                scale:1,    
            }}

            transition={{
                duration:1.5
            }}    
        >
            <SocialIcon 
                network='email'
                bgColor='transparent'
                fgColor='gray'
                className='cursor-pointer'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </motion.div>


    </header>
  )
}

export default Header