import React from "react";
import { HiMail, HiMap, HiPhone } from "react-icons/hi";

export default function Contact() {
  return (
    <div id="contact">
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-brand-main font-bold text-center">
            Contact us
          </h1>

          <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-6">
            <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                role="img"
                aria-label="phone number"
              >
                <HiPhone className="h-12 w-12" />
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Phone
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-600">
                +27 79 155 1762
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-600">
                +27 63 647 5313
              </p>
            </div>
            <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center ">
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
              <p className="text-base mt-4 leading-4 text-center text-gray-600">
                muditafoundationsa@gmail.com
              </p>
            </div>
            <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center ">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                role="img"
                aria-label="location"
              >
                <HiMap className="h-12 w-12" />
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Address
              </p>
              <p className="text-base mt-4 leading-6 text-center text-gray-600 w-48">
                44 Driedoorn Street, Malabar, 6020 Gqeberha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
