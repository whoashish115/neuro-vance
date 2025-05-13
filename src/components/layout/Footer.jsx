import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footer, socials } from "../../data/global";

const Footer = () => {
 

  return (
    <footer className="body-font bg-titlemt-8 md:font-medium">
      <div className="max-w-[1250px] px-4 py-8 md:py-20 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="md:min-w-80 ">
          <Link href="/"  data-aos='fade-up'   >
            <div className="flex-col titlew-full justify-center mx-3 md:w-auto font-bold text-lg md:text-xl uppercase cursor-pointer flex gap-2 ">
            <Image width={500} height={500} src="/assets/logo.png" alt='logo' className="w-[40px] md:w-[60px] lg:w-[90px] lg:h-[90px] h-[40px] md:h-[60px]" />
            <div className="text-title">
                <span className="gradient-text ">Neurovance
                </span>  
            </div>
            </div>
          </Link>
          <p  data-aos='fade-up' data-aos-delay={150} className="mt-3 mx-3 text-title text-sm sm:text-md md:text-base !font-normal w-full">
          Elevating Your Wellness with Unparalleled Expertise
          </p>
          <p  data-aos='fade-up' data-aos-delay={300} className="mt-3 mx-3 text-sm sm:text-md md:text-base !font-normal w-full">
          Neurovance is a leading provider of comprehensive professional physical therapy and rehabilitation services. Founded in 2004, OSP has been dedicated to delivering expert care and innovative solutions to enhance patient recovery and well-being.
          </p>
        </div>
        <div className="flex-grow md:min-w-1/2 flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10">
          {Object.keys(footer).map((key, i) => (
            <div data-aos='fade-up'  key={i} className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="tracking-widest text-xl mb-8 relative after:content-start after:absolute after:bottom-0 after:left-0 text-title after:right-0 after:w-[15%] after:mb-[-12px] after:h-[4px] after:bg-secondary">
                {key}
              </h2>
              <nav className="list-none mb-10">
                {footer[key].map(({ text, url }, j) => (
                  url ? <Link  data-aos='fade-up'data-aos-delay={150*(j+1)}  key={j} href={url}>
                    <li key={j}>
                      <div className="text-text-main/75 py-0.5 text-sm sm:text-md hover:text-titlecursor-pointer">
                        {text}
                      </div>
                    </li>
                  </Link>
                  : <li key={j}  data-aos='fade-up'data-aos-delay={150*(j+1)} >
                  <div className="text-text-main/75 cursor-default py-0.5 text-sm sm:text-md">
                    {text}
                  </div>
                </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-outline">
        <div className="max-w-[1250px] mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
          <div data-aos='fade-up' className="py-3 uppercase text-sm md:text-base text-center font-semibold">
            copyright &copy; 2025
            <span className="mx-2">|</span>
            All right reserved
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center space-x-3">
            {socials.map(({ icon, url }, i) => (
              <Link key={i} href={url}>
                <div  data-aos='fade-up' data-aos-delay={150*(i+1)}  className="hover:gradient-text opacity-70 hover:opacity-100 cursor-pointer">
                  {icon}
                </div>
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
