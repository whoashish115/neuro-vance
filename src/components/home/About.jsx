import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const About = () => {
  return (
    <>
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 mt-16 md:mt-12">
         <div className="flex flex-wrap">
           <div className="flex flex-wrap px-4 mt-auto mb-auto lg:w-1/2 md:w-2/3 content-start md:pr-12 order-1  ">
           <div className="w-full">
      <div className="pl-4 mt-4 mt-lg-0">
      <h2  className="text-3xl md:text-4xl font-semibold text-title tracking-wider !leading-tight">
          <span data-aos="fade-up">
          Accelerating Digital Transformation <br />
          </span>
          <span data-aos="fade-up"  data-aos-delay="150">
          &{" "}
          <span className="gradient-text font-bold uppercase">
            Innovating for Tomorrow
          </span>
          </span>
          <span data-aos="fade-up"  data-aos-delay="300">
          {" "} with Biomimetic Robotics
          </span>
        </h2>
        <p data-aos="fade-up"  data-aos-delay="450" className="mt-4 mb-8">
        At Neurovance, we pioneer intelligent solutions powered by biomimetic robotics. Our mission is to drive sustainable growth by creating technologies that mimic the brilliance of nature. <br/><strong className="font-extrabold gradient-text cursor-default">LET'S BUILD THE FUTURE TOGETHER</strong>
        </p>

        <Link href="/services">
          <button  data-aos="fade-up"  data-aos-delay="600" className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-title dark:bg-title/5 hover:bg-transparent border-2 border-title dark:border-title/10  hover:text-title text-default outline-none font-bold">
            explore our services{" "}
            <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 transition-all" />
          </button>
        </Link>
      </div>
    </div>
           </div>
           <div className="lg:w-1/2  md:w-1/3 mb-8 p-12 pb-0 animate-float overflow-hidden w-full order-0 mx-2 md:mx-0">
             <Image
               className=" object-center w-full  rounded-xl md:rounded-3xl md:p-12  max-h-[550px] leading-[0px]"
               src="/assets/images/shapes/9.png"
               width={600}
               height={400}
               data-aos="fade-right" 
               alt="cta"
             />
           </div>
   
         </div>
  </div>
  <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 mt-16 md:mt-12">
  <div className="flex flex-wrap">
    <div className="flex flex-wrap px-4 mt-auto mb-auto lg:w-1/2 md:w-2/3 content-start md:pr-12 order-1 md:order-0">
      <div className="w-full">
        <div className="pl-4 mt-4 mt-lg-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-title tracking-wider !leading-tight">
            <span data-aos="fade-up">
              Empowering Intelligent Innovation <br />
            </span>
            <span data-aos="fade-up" data-aos-delay="150">
              &{" "}
              <span className="gradient-text font-bold uppercase">
                Shaping Smarter Futures
              </span>
            </span>
            <span data-aos="fade-up" data-aos-delay="300">
              {" "} with Biomimetic Robotics
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="450" className="mt-4 mb-8">
            At Neurovance, we create solutions that go beyond the limits of traditional technology. By harnessing the power of biomimetic robotics, we enable businesses to unlock smarter, more sustainable futures. <br />
            <strong className="font-extrabold gradient-text cursor-default">DISCOVER THE FUTURE WITH US</strong>
          </p>

          <Link href="/services">
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-title dark:bg-title/5 hover:bg-transparent border-2 border-title dark:border-title/10  hover:text-title text-default outline-none font-bold"
            >
              Learn More{" "}
              <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 transition-all" />
            </button>
          </Link>
        </div>
      </div>
    </div>

    <div className="lg:w-1/2 md:w-1/3 mb-8 p-12 pb-0 animate-float overflow-hidden w-full order-0 mx-2 md:order-1 md:mx-0">
      <Image
        className="object-center w-full rounded-xl md:rounded-3xl md:p-12 max-h-[550px] leading-[0px]"
        src="/assets/images/shapes/1.png"
        width={400}
        height={400}
        data-aos="fade-right"
        alt="cta"
      />
    </div>
  </div>
</div>

</>

  )
}

export default About
