import {Fragment} from 'react'
import Image from "next/future/image";
import Link from "next/link";

const Hero = () => {

  const notes = [
    {
      title: "What we offer",
      subtitle: "Some of the things we have experience with",
      points: [
        "personal support, impartial listening, emphathetic",
        "academics: finding the right course to study, school/university application, abroad studies",
      ],
    },
    {
      title: "Meet & Greet",
      subtitle: "We will have a conversation with you to find out",
      points: [
        "what are your academic and personal needs and goals",
        "what are your challenges/struggles",
      ],
    },
    {
      title: "Set up a plan",
      subtitle:
        "Depending on the meet & greet we will do our best to help you ",
      points: [
        "find information and the right environment to meet your needs",
        "regular check in, available for ongoing emotional and practical support",
      ],
    },
  ];


  return (
    <Fragment>
      <section className="relative isolate">
        <div className="absolute bg-slate-50/70 inset-0">
          <div className="mx-auto max-w-7xl px-4 h-full">
            <div className="flex flex-col relative justify-center items-start h-full">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-slate-800">
                Finding Joy In The
                <br /> <span className="text-teal-700">
                  Success Of Others
                </span>{" "}
              </h1>
              <p className="text-lg md:text-2xl font-medium text-gray-900 leading-7 mt-5 max-w-[50ch]">
                We understand that every person has different needs this is why
                we offer a holistic approach to each individuals needs
              </p>

              <Link href="/services">
                <a className="px-8 py-2 bg-slate-800 text-gray-100 hover:bg-slate-600 transition-all duration-300 cursor-pointer font-medium uppercase mt-8">
                  Services
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          className="w-full h-screen object-cover"
          width={1500}
          height={1000}
          alt="background"
        />
      </section>
      <section className="-translate-y-8 md:-translate-y-28">
        <div className="grid max-w-7xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {notes.map((item, i) => (
            <div
              key={i}
              className={`w-full shadow-lg flex flex-col px-5 py-10 rounded ${
                i + (1 % 1) === 1
                  ? "bg-slate-200 text-slate-800"
                  : "bg-teal-700 text-slate-100"
              }`}
            >
              <h4 className="text-4xl text-center font-medium">{item.title}</h4>
              <p className="mt-2 text-xl">{item.subtitle}</p>
              <ul className="list-disc pl-4">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm font-medium py-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2">
            <Image
              src="/images/growth.jpg"
              width={1500}
              height={1089}
              alt="mission"
              className="w-full h-full col-span-2 md:col-span-1 md:rounded-l-lg object-cover"
            />
            <div className="col-span-2 md:col-span-1 shadow-md bg-slate-100 w-full p-10">
              <div className="text-teal-800 flex space-x-3 items-center">
                <p className="text-sm uppercase font-bold">
                  A little bit about us{" "}
                </p>{" "}
                <span className="w-1/3 h-[3px] bg-teal-800"></span>
              </div>{" "}
              <h2 className="text-2xl md:text-4xl text-slate-700 font-bold mt-6">
                Mission
              </h2>

              <p className="text-ms md:text-md mt-3 mb-6 md:leading-7 text-slate-600">
                The Mudita Foundation hopes to empower everyone struggling to
                reach their goals but especially members of marginalized groups
                through education and also providing a safe supportive
                environment.
              </p>
              <Link href="/services">
                <a className="px-8  py-2 bg-slate-800 text-gray-100 hover:bg-slate-600 transition-all duration-300 cursor-pointer font-medium uppercase mt-8">
                  Services
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Hero;
