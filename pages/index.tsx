import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y scrollbar scrollbar-thin scrollbar-track-gray-500 scrollbar-thumb-[#F7AB0A] snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Visakh's Portfolio</title>
      </Head>

      {/* Header  */}
         <Header />  
      {/* Hero */}
        <section id='hero' className='snap-start'>
          <Hero />
        </section>
      {/* About */}
        <section id='about' className='snap-center'>
          <About />
        </section>
      {/* Experience */}
        <section id='experience' className='snap-start'>
          <Experience />
        </section>
      {/* Skill section */}
        <section id='skills' className='snap-center'>
          <Skills />
        </section>
      {/* Project section */}
        <section id='projects' className='snap-center'>
          <Projects />
        </section>
      {/* Project section */}
        <section id='contact' className='snap-end'>
          <Contact />
        </section>
    
    </div>
  )
}

export default Home
