import React from "react";
import Image from "next/image";
import { Ticker, TitleAndDescription } from "../";
import { HiCheck } from "react-icons/hi";
import { tiles } from "../../data/global";

const CtaSection = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-10 ">
      <div className="flex flex-wrap">
        <div className="flex flex-wrap px-4 mt-auto mb-auto lg:w-1/2 md:w-2/3 content-start md:pr-12 order-1 md:order-0 ">
          <div>
            <TitleAndDescription
              titleStart="we"
              titleHighlight="offer more"
              titleEnd="than you might imagine"
              description="Our comprehensive range of services goes beyond traditional treatments, encompassing innovative techniques, and a team of highly skilled professionals. Discover the full spectrum of care designed to elevate your physical well-being."
              left
            />
          </div>
          <div className="md:p-4 sm:w-1/2 w-1/2 text-title p-2">
            <h2 className="font-medium gradient-text text-3xl" data-aos="zoom-in"  data-aos-delay="300">
              <span className="gradient-text" >
                <Ticker count={4500} />
              </span>
              +
            </h2>
            <p className="leading-relaxed"  data-aos="fade-up"  data-aos-delay="300"> Clients</p>
          </div>
          <div className="md:p-4 sm:w-1/2 w-1/2 p-2" data-aos="zoom-in"  data-aos-delay="450">
            <h2 className="font-medium gradient-text text-3xl">
              <span className="gradient-text" >
                <Ticker count={41} />
              </span>
              +
            </h2>
            <p className="leading-relaxed" data-aos="fade-up"  data-aos-delay="450">Companies</p>
          </div>
          <div className="md:p-4 sm:w-1/2 w-1/2 p-2" data-aos="zoom-in"  data-aos-delay="600">
            <h2 className="font-medium gradient-text text-3xl">
              <span className="gradient-text">
                <Ticker count={38} />
              </span>
              +
            </h2>
            <p className="leading-relaxed" data-aos="fade-up"  data-aos-delay="600">Major  Companies </p>
          </div>
          <div className="md:p-4 sm:w-1/2 w-1/2 p-2" data-aos="zoom-in"  data-aos-delay="750">
            <h2 className="font-medium  text-3xl">
              <span className="gradient-text">
                <Ticker count={17} />
              </span>
              +
            </h2>
            <p className="leading-relaxed" data-aos="fade-up"  data-aos-delay="750">Achievements</p>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/3 md:mb-8 p-8 overflow-hidden w-full order-0 mx-2 md:mx-0 md:order-1">
          <Image
            className="animate-float object-center w-full rounded-xl md:rounded-3xl  max-h-[550px] leading-[0px]"
            src="/assets/images/shapes/6.png"
            width={600}
            height={400}
             data-aos="fade-up"
            alt="cta"
          />
        </div>

      </div>
      <div className=" sm:px-4 flex flex-col gap-4 items-center  lg:gap-6">
        <h1 data-aos="fade-up"  className={`  px-4 font-family text-title  text-xl md:text-2xl mb-3 !leading-snug font-semibold`}>
        Get 100%   <span className="gradient-text font-bold uppercase">Consultance</span> on Almost Anything At Very Low Cost
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3  sm:px-4 flex-wrap w-full gap-4">
          {tiles.map((t, i) => (
            <div data-aos="fade-up"  data-aos-delay={150*i} key={i} className="p-4 px-6  w-full bg-paper hover:bg-box rounded-2xl">
              <h2 className="font-bold text-title  tracking-widest text-center mb-4 text-lg underline leading-relaxed !uppercase  ">{t.title}</h2>
              <div className="flex flex-col items-start justify-center gap-1">
                {t.list.map((n, i) => (
                  <div key={i} className="flex items-center justify-center text-center">
                    <div className="bg-background-paper border-2 text-secondary border-secondary p-1 m-0.5  mr-2 rounded-full inline-flex items-center text-center justify-center">
                      <HiCheck className="text-sm " />
                    </div>
                    <div className="text-sm">
                      {n}
                      </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CtaSection;
