import Link from "next/link";
import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { ImInstagram, ImWhatsapp } from "react-icons/im";

export default function Contact() {
  return (
    <div id="contact">
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-brand-main font-bold text-center">
            Contact us
          </h1>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-10 gap-6">
            <div className="bg-slate-100 border rounded-md border-gray-200 h-64 flex flex-col items-center">
              <div
                className=" mt-8  bg-indigo-50 rounded-full flex items-center justify-center"
                role="img"
                aria-label="phone number"
              >
                <HiPhone className="h-12 w-12" />
                <ImWhatsapp className="h-12 w-12" />
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Phone
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-800">
                +27 79 155 1762
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-800">
                +27 63 647 5313
              </p>
            </div>
            <div className="bg-slate-100 border rounded-md border-gray-200 h-64 flex flex-col items-center ">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center "
                role="img"
                aria-label="email"
              >
                <HiMail className="h-12 w-12" />
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Email
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-800">
                info@muditafoundationsa.co.za
              </p>
            </div>
            <div className="bg-slate-100 border rounded-md border-gray-200 h-64 flex flex-col items-center ">
              <Link
                href="https://instagram.com/muditafoundation_sa?igshid=YmMyMTA2M2Y="
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center "
                role="img"
                aria-label="instagram"
              >
                <ImInstagram className="h-12 w-12" />
              </Link>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Instagram
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-800">
                muditafoundation_sa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
