import React from "react";
import Link from "next/link";
import { HiOutlineClock, HiOutlineTruck, HiOutlineUser } from "react-icons/hi";

const Services = () => {
  return (
    <>
      <div className="w-full text-center sm:p-4 px-4 mb-12 md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-4">
          A bit about{" "}
          <span className="gradient-text font-bold uppercase ">Ourself</span>
        </h1>
        <div className="leading-relaxed text-sm md:text-base opacity-80">
        Discover the story behind our clinic and the values that drive our practice as we strive to make a positive impact on your health and well-being.
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/3 px-2 ">
          <div className="bg-background-paper max-w-[400px] rounded-xl md:rounded-3xl w-auto mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineUser className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Advanced Physiotherapies</span>
            <h4 className="mb-4 mt-2 text-2xl dark:gradient-text">Able to treat just anything </h4>
            <p className="text-base !leading-normal">
            Our commitment to excellence and advanced therapies ensures your journey to optimal health and mobility is in the best hands.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper  w-auto max-w-[400px] rounded-xl md:rounded-3xl mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineClock className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Timing schedule</span>
            <h4 className="mt-2 mb-2 text-2xl dark:gradient-text">Working Hours</h4>
            <ul className="inline-block list-unstyled mx-auto text-left opacity-80 text-base !leading-normal">
              <li className="flex gap-2 justify-between">
                <div className="flex-grow- whitespace-nowrap">
                Morning - 
                </div>
                <div>
                6:00 AM - 10:00 AM
                </div>
              </li>
              <li className="flex gap-2 justify-between">
                <div className="flex-grow- whitespace-nowrap">
                Evening - 
                </div>
                <div>
                4:00 PM - 10:00 PM
                </div>
              </li>
              <li className="flex uppercase font-bold gradient-text justify-center">
                All Days
              </li>
            </ul>
            <Link href="/appointment">
              <button className="inline-flex mt-6 transition items-center cursor-pointer uppercase align-middle text-center select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-titledark:bg-text-main/5 hover:bg-transparent border-2 border-titledark:border-text-main/10 dark:hover:bg-primary hover:text-titletext-white outline-none font-bold">
                Make appoinment
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper max-w-[400px] rounded-xl md:rounded-3xl w-auto mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineTruck className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">More Experience</span>
            <h4 className="mb-4 mt-2 text-2xl dark:gradient-text">3Yr+ Experience</h4>
            <p className="text-base !leading-normal">
            Experience the difference in care and expertise with our dedicated team. Trust us to provide you with top-notch physiotherapy services tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
