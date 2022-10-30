import type { GetStaticProps,   NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { type } from 'os'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import {experience, postInfo, project, skill} from "../typings"
import { Fetchexperience } from '../utils/Fetchexperience'
import { FetchpostInfo } from '../utils/FetchpostInfo'
import { Fetchprojects } from '../utils/Fetchprojects'
import { Fetchskills } from '../utils/Fetchskills'

type Props = {
  postInfo:  postInfo
  experience : experience,
  skills : skill,
  projects : project
}

const Home = ({  postInfo, experience, skills, projects}: Props) => {

  console.log(experience);
  console.log(skills);
  
  

  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y scrollbar scrollbar-thin scrollbar-track-gray-500 scrollbar-thumb-[#F7AB0A] snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Visakh's Portfolio</title>
      </Head>

      {/* Header  */}
         <Header />  
      {/* Hero */}
        <section id='hero' className='snap-start'>
          <Hero 
            pageinfo = {postInfo}
          />
        </section>
      {/* About */}
        <section id='about' className='snap-center'>
          <About 
            pageinfo = {postInfo}
          />
        </section>
      {/* Experience */}
        <section id='experience' className='snap-start'>
          <Experience 
            experience = {experience} 
          />
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

      {/* Profile btn */}
      <Link href="#hero">
        <footer className='sticky cursor-pointer bottom-5 w-full '>
          <div className='flex items-center justify-center' >
            <img 
              src='https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png'
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-pulse'
            />
          </div>
        </footer>
      </Link>
    
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() =>  {
  const postInfo : postInfo[] = await FetchpostInfo() ;
  const experience : experience[] = (await Fetchexperience() || []);
  const skills : skill[] = (await Fetchskills() || []);
  const projects : project[] = (await Fetchprojects() || []);

  return {
    props : {
      postInfo,
      experience,
      skills,
      projects
    },

    revalidate : 10

  }
 

}