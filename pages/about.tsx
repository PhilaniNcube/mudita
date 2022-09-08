import Head from 'next/head';
import {Fragment} from 'react'
import GreySection from '../components/About/GreySection';
import TopSection from '../components/About/TopSection';

const about = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Mudita Foundation</title>
      </Head>
      <main>
        <TopSection />
        <GreySection />
      </main>
    </Fragment>
  );
};
export default about;
