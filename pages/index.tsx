import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white">
      <Head>
        <title>Visakh's Portfolio</title>
      </Head>

      {/* Header  */}

      <Header />
      <section>
        {/* Hero */}
        <Hero />
      </section>
    
    </div>
  )
}

export default Home
