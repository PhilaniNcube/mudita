import Image from "next/future/image";
import Head from "next/head";
import { Fragment } from "react";

const Promise = () => {
  return (
    <Fragment>
      <Head>
        <title>Our Promise | Mudita</title>
      </Head>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              alt="friends"
              src="/images/friends.jpg"
              width={1500}
              height={1000}
              className="w-full aspect-video object-cover"
            />
            <div className="w-full md:pl-6 py-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-slate-800">
                Our
                <br /> <span className="text-teal-700">Promise</span>{" "}
              </h1>{" "}
              <p className="text-lg mt-4 text-gray-600">
                We understand that every person has different needs this is why
                we offer a holistic approach to each individuals needs.
              </p>
              <p className="text-lg mt-4 text-gray-600">
                The only thing we ask is that you pledge to be happy for the
                success of your fellow Mudita family and when you do succeed to
                help us help others.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Promise;
