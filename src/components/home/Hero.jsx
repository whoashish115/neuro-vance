'use client'
import React, { useEffect, useState } from "react";

const hero = () => {

  const images = [
    // theme =='light' ? "/assets/images/banner-4.png":"/assets/images/banner-1.jpg",
    // theme =='light' ? "/assets/images/banner-4.png":"/assets/images/banner-2.jpg",
    "/assets/images/banner-1.jpg",
    "/assets/images/banner-2.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFlash(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="intro" className="relative  ">
      <div className="  w-full  mx-auto  flex flex-col items-center    relative z-40  ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentImage  ? " opacity-100" : "opacity-0"
              }`}
          />
        ))}

        <div className={` ${flash ? 'opacity-100' : 'opacity-0'} duration-300 transition-all absolute inset-0 bg-black  animate-flash z-20`}></div>

        <div className="z-30 overlay"></div>
        <div  className=" h-full w-full px-12 my-12 md:my-20 flex max-w-[1250px] flex-col items-center justify-center text-center relative z-30 ">
          <h1

          data-aos="fade-up"
            className="text-5xl lg:text-7xl text-white  tracking-tight z-30  leading-tight  font-bold   ">
              <span style={{textShadow: '4px -12px 29px rgba(0,0,0,0.6)'}}>
            Empowering Your
              </span>
            <span className="gradient-text underline uppercase font-secondary"> Digital </span> 
              <span style={{textShadow: '4px -12px 29px rgba(0,0,0,0.6)'}}>
              Future With Something
              </span>
            <span className="gradient-text underline uppercase font-secondary"> Unique </span> 



          </h1>

          <div  data-aos="fade-up"
          data-aos-delay="150"
           className="text-white z-30  my-4 text-2xl tracking-widest lg:text-2xl uppercase  gap-2 font-semibold  ">
         Transform your <span className="gradient-text bold">business</span> with cutting-edge biomimetic technology.
            {/* Expert IT Consulting to Accelerate Innovation, Optimize Operations, and Fuel Business Growth. */}

          </div>
          <p  data-aos="fade-up"
          data-aos-delay="300"
          data-aos-easing="ease-in-out" className='font-light text-white  md:max-w-1/2 '>
            At Neurovance, we partner with forward-thinking businesses to deliver innovative IT solutions that drive transformation and unlock new growth opportunities. From strategy through execution, we bring deep expertise, agility, and an unwavering commitment to your success.
          </p>
          <div className="flex gap-4 flex-wrap p-8 text-white">
          <button data-aos="fade-up" data-aos-delay="450" data="Learn More" className="text- md:text-2xl font-title w-full md:w-auto  gradient-button-alternate" />
          <button data-aos="fade-up" data-aos-delay="600" data="Click me" className="text- md:text-2xl font-title  w-full md:w-auto gradient-button" />
          </div>
        </div>
      <div className="wrap h-[150px]  z-50">
      <div className="triangle tr-left md:block hidden"></div>
      <div className="triangle tr-right md:block hidden"></div>
      <div data-aos="fade-up" data-aos-delay="600" onClick={()=>document.getElementById('about').scrollIntoView({block:'start', behavior:"smooth"})} className="flex flex-col  justify-center items-center absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <div style={{boxShadow:'0px 0px 100px 18px var(--color-secondary)'}} className="  cursor-pointer w-[40px] flex justify-center py-[10px] h-[80px] border-2 border-secondary rounded-full ">
<div style={{boxShadow:'0px 0px 100px 18px var(--color-secondary)'}} className="w-[20px] h-[20px] hero-dot rounded-full  border-[6px] border-secondary">

</div>
        </div>
      </div>
      </div>
      </div>


    </section>
  )
}

export default hero