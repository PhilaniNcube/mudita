import {Fragment} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/Home/AboutSection'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Mudita Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Hero />
      </main>


    </Fragment>
  )
}

export default Home
