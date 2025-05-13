'use client'

import React from "react";
import { global } from "../../../data/global";

const UpSide = () => {
  return (
    <>
      <div className="flex flex-wrap mb-12 mt-16 md:mt-24 px-2 ">
        <div className="flex flex-[50%] w-full px-4 flex-col mb-20 flex-wrap items-start justify-center text-center">
        <h1 data-aos='fade-up'  className="text-3xl md:text-4xl mx-auto mb-4 !leading-tight font-semibold tracking-widest">
           Our{" "}
            <span className="gradient-text uppercase font-bold">
              Location
            </span>{" "}
            on map
        </h1>
        <p data-aos='fade-up'  data-aos-delay="150" className="mx-auto leading-relaxed text-sm md:text-base lg:max-w-[60%]">
        Connect with our expert IT consultants today. Whether you need strategic advice, project support, or tailored solutions, we're here to help drive your success. Your digital transformation starts with a conversation.
        </p>
        </div>
      </div>

      <div className="px-2" data-aos='fade-up'  data-aos-delay="300">
        <iframe
        src={global.location}
          width={800}
          height={600}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg"
        ></iframe>
      </div>
    </>
  );
};

export default UpSide;
