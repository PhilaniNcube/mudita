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
      <section
        className="relative isolate bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/images/hero_bg.jpg)" }}
      >
        <div className="">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-2 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="w-full h-full flex flex-col justify-center pr-6">
                <h1 className="text-3xl md:text-5xl lg:text-[4rem] leading-7 text-slate-800">
                  Finding joy in the <br />
                  <span
                    className="text-brand-main text-4xlnpm run dev
                   md:text-6xl lg:text-[5rem] font-bold"
                  >
                    success of others
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-800 mt-4">
                  We understand that every person has different needs, this is
                  why we offer a holistic approach to each individuals needs.
                </p>
                <Link href="#about">
                  <div className="text-center min-w-[200px] w-1/2 max-w-2xl py-2 text-lg bg-brand-main font-serif font-bold my-3 text-white rounded-lg">
                    Learn More
                  </div>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className=" md:-translate-y-28">
        <div className="grid max-w-7xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {notes.map((item, i) => (
            <div
              key={i}
              className={`w-full shadow-lg flex flex-col font-serif px-5 py-10 rounded-xl aspect-square ${
                i + (1 % 1) === 1
                  ? "bg-brand-light text-slate-50"
                  : "bg-brand-main text-slate-100"
              }`}
            >
              <h4 className="text-4xl font-serif font-bold">{item.title}</h4>
              <p className="mb-2 text-lg pr-3 leading-5">{item.subtitle}</p>
              <ul className="list-disc pl-8">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm font-medium py-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex my-16 justify-center items-center">
          <Link href="#contact_form">
            <button className="max-w-2xl py-2 rounded-lg bg-brand-main text-white px-6 text-xl uppercase font-bold">
              Get In Touch
            </button>
          </Link>
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
              <div className="text-brand-main flex space-x-3 items-center">
                <p className="text-sm uppercase font-bold">
                  A little bit about us{" "}
                </p>{" "}
                <span className="w-1/3 h-[3px] bg-brand-main"></span>
              </div>{" "}
              <h2 className="text-2xl md:text-4xl font-serif text-slate-700 font-bold mt-6">
                Mission
              </h2>
              <p className="text-ms md:text-md mt-3 mb-6 md:leading-7 text-slate-600">
                The Mudita Foundation hopes to empower everyone struggling to
                reach their goals but especially members of marginalized groups
                through education and also providing a safe supportive
                environment.
              </p>
              <Link href="#about">
                <a className="px-8  py-2 bg-brand-main text-gray-100 hover:bg-slate-600 transition-all duration-300 cursor-pointer font-medium uppercase mt-8">
                  Learn More
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
