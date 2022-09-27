import Image from 'next/future/image';
import {Fragment} from 'react'

const TopSection = () => {
  return (
    <Fragment>
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto py-4 px-4 grid grid-cols-2 gap-8 md:gap-x-12">
          <div>
            {" "}
            <div className="text-slate-700 flex space-x-3 items-center">
              <p className="text-sm md:text-lg md:font-bold font-serif uppercase font-medium">
                A little bit about us{" "}
              </p>{" "}

            </div>{" "}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-slate-800">
              Project
               <span className="text-brand-main lowercase">Mission</span>{" "}
            </h1>
            <p className="text-lg mt-4 text-gray-600 text-justify">
              We have been friends for almost a decade, studying, traveling and
              going on many adventures together. Growing up with very different
              cultural backgrounds (German and South African) we have learned to
              truly embrace people as they are. As this beautiful friendship
              grew we realised the key to growth is having the support needed to
              thrive and that we became better when we both supported each other
              unconditionally. This created an environment that made us feel
              like we could accomplish anything we want. Working together in
              some of the harshest medical environments we quickly learnt that
              the world is very unfair. Our Mission is to try and make it a
              little more equal for everyone. This is why we want to support
              marginalised groups by creating a safe support sanctuary where
              everyone feels welcomed and supported.{" "}
            </p>
          </div>

          <Image src="/images/friends.jpg" width={1500} height={1000} alt="Friends" className="w-full col-span-2 md:col-span-1 object-cover h-full" />
        </div>
      </section>
    </Fragment>
  );
};
export default TopSection;
