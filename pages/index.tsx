import {Fragment, useState} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Home/Hero'
import TopSection from '../components/About/TopSection';
import GreySection from '../components/About/GreySection';
import Contact from '../components/Home/Contact';
import ContactForm from '../components/Home/ContactForm';
import heroSection, { Goals, ProjectMission, PromisesType, getPromise, goals, projectMission } from '../lib/hero';
import client from '../lib/contentful';

type ComponentProps = {
  heroData: HeroData;
  contentBoxes?: {
    title: string;
    list: string[];
  }[];
  mission?: {
    title: string;
    subTitle: string;
    description: string;
  };
  projectMissionData: ProjectMission;
  goalsData: Goals[];
  ourPromise:PromisesType;
};

const Home = ({
  heroData,
  contentBoxes,
  mission,
  projectMissionData,
  goalsData,
  ourPromise,
}: ComponentProps) => {
  const [show, setShow] = useState(false);

  console.log({ ourPromise });

  return (
    <Fragment>
      <Head>
        <title>Home | Mudita Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          heroData={heroData}
          contentBoxes={contentBoxes}
          mission={mission}
        />
        <TopSection projectMission={projectMissionData} />
        <GreySection goals={goalsData} />

        <section id="promise">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="w-full md:pl-6 py-3">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold  text-slate-800">
                  <span className="text-brand-main lowercase">
                    {ourPromise.title}
                  </span>
                </h1>{" "}
                <p className="text-lg md:text-[1.4rem] font-medium mt-4 text-gray-700">
                  {ourPromise.text}
                </p>
              </div>{" "}
              <Image
                alt="friends"
                src={`https:${ourPromise.image.fields.file.url}`}
                width={ourPromise.image.fields.file.details.image.width}
                height={ourPromise.image.fields.file.details.image.height}
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
};

export default Home


export async function getServerSideProps() {
    const heroData = await client
      .getEntry("IQmCyjxK4buckNLeC1h14")
      .then((entry) => entry)
      .catch(console.error);

const box1 = await (await client.getEntry("3IjAhdc2gYMdTuQpmtgwkq")).fields


  const box2 = await (await client.getEntry("1hNWthMKkBh8wAdMtbYo5F")).fields


    const box3 = await (await client.getEntry("14KKZ5I5vfXDPmDRDeCJ0h")).fields

 const mission = await (await client.getEntry("6UR3504b68oA9gfOq18rNF")).fields

 const projectMissionData = await projectMission();
 const goalsData = await goals();

  const ourPromise = await getPromise()




    return {
      props: {
        heroData,
        contentBoxes: [box1, box2, box3],
        mission,
        projectMissionData,
        goalsData,
        ourPromise,
      },
    };
}
