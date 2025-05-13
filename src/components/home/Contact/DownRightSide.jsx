'use client'
import React from "react";
import {
  HiLocationMarker,
  HiPhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";
import { global } from "../../../data/global";

const DownRightSide = () => {
  return (
    <div data-aos='fade-up'    className="lg:w-1/3 lg:pl-8 p-4 mt-4">
        <h3  className="text-lg text-title md:text-xl tracking-wider !leading-tight">
          Address
        </h3>
        <div className="h-[6px] gradient-bg w-[30px] mt-4 mb-6" />
        <div>
          <ul className="text-title">
            <li data-aos='fade-up'   data-aos-delay={150}  className="flex items-center py-2">
              <HiLocationMarker className="w-[25px] flex-shrink-0 h-[25px] mr-2" />
              {global.address}
            </li>
            <li data-aos='fade-up'   data-aos-delay={300}  className="flex items-center py-2">
              <HiOutlineClock className="w-[25px] h-[25px] mr-2" />
              {global.timing}
            </li>
            <li data-aos='fade-up'   data-aos-delay={450}  className="flex items-center py-2">
              <HiOutlineMail className="w-[25px] h-[25px] mr-2" />
              {global.email}
            </li>
            <li  data-aos='fade-up'   data-aos-delay={600}  className="flex items-center py-2">
              <HiPhone className="w-[25px] h-[22px] mr-2" />
              {global.phone}
            </li>
          </ul>
        </div>
    </div>
  );
};

export default DownRightSide;
