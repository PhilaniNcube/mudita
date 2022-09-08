import Image from "next/future/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 isolate">
        <div className="w-full relative flex items-center justify-center">
          <div className="w-full h-full absolute inset-0 -z-10 rounded-br-[7rem] rounded-tl-[7rem] border-2 border-yellow-600" />
          <Image
            src="/images/hero.jpg"
            alt="hero image"
            className="w-full h-full -translate-x-8 -translate-y-8 shadow-lg shadow-black/20  rounded-br-[7rem] rounded-tl-[7rem] object-cover"
            width={1500}
            height={1000}
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start px-8">
          <p className="text-gray-600 font-medium uppercase text-lg">
            About Us
          </p>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
            A little bit <br /> about us
          </h2>
          <p className="text-sm text-gray-500 font-medium leading-7 mt-4">
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
            welcomed and supported.
          </p>

          <Link href="/promise">
            <a className="bg-teal-700 mt-4 text-white text-xl uppercase font-medium px-6 py-2 rounded-tl-3xl rounded-br-3xl">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
