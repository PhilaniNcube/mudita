import {Fragment, useState} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Home/Hero'
import TopSection from '../components/About/TopSection';
import GreySection from '../components/About/GreySection';
import Contact from '../components/Home/Contact';
import { AnimatePresence } from 'framer-motion';
import ContactForm from '../components/Home/ContactForm';
import heroSection from '../lib/hero';
import client from '../lib/contentful';

type ComponentProps = {
  heroData:HeroData,
}

const Home = ({heroData}:ComponentProps) => {

  const [show, setShow] = useState(false)


  return (
    <Fragment>
      <Head>
        <title>Home | Mudita Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero heroData={heroData} />
        <TopSection />
        <GreySection />

        <section id="promise">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="w-full md:pl-6 py-3">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold  text-slate-800">
                  Our
                  <span className="text-brand-main lowercase"> Promise</span>
                </h1>{" "}
                <p className="text-lg md:text-[1.4rem] font-medium mt-4 text-gray-700">
                  We understand that every person has different needs this is
                  why we offer a holistic approach to each individuals needs.
                </p>
                <p className="text-lg md:text-[1.4rem] mt-4 text-gray-700">
                  The only thing we ask is that you pledge to be happy for the
                  success of your fellow Mudita family and when you do succeed
                  to help us help others.
                </p>
              </div>{" "}
              <Image
                alt="friends"
                src="/images/promise.jpg"
                width={4000}
                height={4000}
                className="w-full aspect-1 col-span-2 md:col-span-1 object-cover "
              />
            </div>
          </div>
        </section>
        <ContactForm />
        <Contact />
      </main>
    </Fragment>
  );
}

export default Home


export async function getServerSideProps() {
    const heroData = await client
      .getEntry("IQmCyjxK4buckNLeC1h14")
      .then((entry) => entry)
      .catch(console.error);



    return {
      props: {
        heroData
      }
    }
}
