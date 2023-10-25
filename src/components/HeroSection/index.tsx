import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    // <section className="flex flex-row ">
    //   <div className="md:w-1/2">
    //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
    //       Revolutionize Your Hotel Management
    //     </h1>
    //     <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-600">
    //       Elevate guest experiences with our hotel management software.
    //     </p>
    //     <a
    //       href="#pricing"
    //       className="bg-blue-500  text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-blue-700 text-xl md:text-2xl mt-6"
    //     >
    //       Get Started
    //     </a>
    //   </div>
    //   <div className="md:w-1/2 right-0">
    //     <Image
    //       src="/hotel.png"
    //       alt="Hotel Management Software"
    //       className="mt-8 rounded-lg shadow-lg"
    //       width={300}
    //       height={300}
    //     />
    //   </div>
    // </section>
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hotel managment site for hotel companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Let&apos;s check out the global hotel management software, which
            hotels around the world can use to simplify their bookings
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/hotel.png"
            alt="Hotel Management Software"
            className="mt-8 rounded-lg shadow-lg"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
