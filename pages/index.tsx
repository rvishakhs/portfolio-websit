import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Visakh's Portfolio</title>
      </Head>

      {/* Header  */}

      <Header />

    
    </div>
  )
}

export default Home
