import Image from 'next/image';
import {Fragment} from 'react'

const TopSection = () => {
  return (
    <Fragment>
      <section className="pt-16 pb-12" id="about">
        <div className="max-w-7xl mx-auto py-4 px-4 grid gird-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-28">
          <div className="flex flex-col justify-between">
            {" "}
            <div className="text-slate-700 flex space-x-3 items-center">
              <p className="text-sm md:text-lg md:font-bold font-serif uppercase font-medium">
                A little bit about us{" "}
              </p>{" "}
            </div>{" "}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800">
              Project <span className="text-brand-main lowercase">Mission</span>{" "}
            </h1>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
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
          <div className="h-full">
            <Image
              src="/images/lena.jpg"
              width={1200}
              height={1436}
              alt="Friends"
              className="w-full aspect-1 col-span-2 md:col-span-1 object-cover "
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TopSection;
