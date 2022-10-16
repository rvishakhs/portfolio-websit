import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <div className='flex items-center flex-row'>
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
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
                network='email'
                bgColor='transparent'
                fgColor='gray'
                className='cursor-pointer'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </div>


    </header>
  )
}

export default Header