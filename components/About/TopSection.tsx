import {Fragment} from 'react'

const TopSection = () => {
  return (
    <Fragment>
      <section className="py-36">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="text-teal-800 flex space-x-3 items-center">
            <p className="text-sm uppercase font-medium">
              A little bit about us{" "}
            </p>{" "}
            <span className="w-1/4 h-[3px] bg-teal-800"></span>
          </div>{" "}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-slate-800">
            Project
            <br /> <span className="text-teal-700">Mission</span>{" "}
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            We have been friends for almost a decade, studying, traveling and
            going on many adventures together. Growing up with very different
            cultural backgrounds (German and South African) we have learned to
            truly embrace people as they are. As this beautiful friendship grew
            we realised the key to growth is having the support needed to thrive
            and that we became better when we both supported each other
            unconditionally. This created an environment that made us feel like
            we could accomplish anything we want. Working together in some of
            the harshest medical environments we quickly learnt that the world
            is very unfair. Our Mission is to try and make it a little more
            equal for everyone. This is why we want to support marginalised
            groups by creating a safe support sanctuary where everyone feels
            welcomed and supported.{" "}
          </p>
        </div>
      </section>
    </Fragment>
  );
};
export default TopSection;
