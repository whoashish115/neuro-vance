'use client'
import React, { useState, useEffect, useRef  } from 'react'
import {
  HiOutlineMenu as MenuIcon,
  HiOutlineX as CloseIcon,
  HiOutlineArrowSmUp as ChevronUpIcon,
  HiVolumeOff,
  HiVolumeUp,
} from 'react-icons/hi'
import { nav, pixelnav } from "../../data/navigations";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleScroll = (link) => {
    setDrawerOpen(false)
    try {
      
        if (link.includes('#')) {
          if (router.pathname !== "/") {
            router.push(`/${link}`);
          } else {
            document
            .querySelector(link)
            .scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          router.push(link);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (

    <>
<div id="top" className='hidden'/>
      <header className={` bg-paper h-[72px]  fixed top-0  z-50 overflow-hidden w-full`} >
        <nav className="h-full w-full flex justify-between px-4  items-center max-w-[1250px] mx-auto">
        <button onClick={handleDrawerToggle} className={`text-2xl lg:hidden  text-white p-1.5 lg:p-2 rounded-xl lg:rounded-2xl z-30`}>
          <MenuIcon />
        </button>
        <Link href='/'> 
          <h1 data-aos="fade-up"
            className=" hidden lg:flex text-5xl flex-grow  gap-2 items-center pl-4   leading-relaxed  text-title">
            <Image alt='logo' className='w-24' src="/assets/logo.png" width={80} height={20}/>
            <span  className='text-xl dark:text-red-500'>
            Neurovance 
            </span>
          </h1>
              </Link>
          <ul className=" hidden lg:flex  flex-wrap m-3  p-1 rounded-2xl align-center ">
          
         
           
       
            {nav.map(({ name, icon, link }, index) => (
<li
key={index}
data-aos="fade-up"
data-aos-delay={index*150}
className="h-[60px] lg:h-[70px] flex px-2 justify-center items-center font-semibold"
>
<Link href={link}>
  <div
    onClick={() => setDrawerOpen(false)}
    className="flex relative cursor-pointer justify-start text-title font-family lg:justify-center items-center hover-gradient-text before:content-center before:transition-all before:w-0 hover:before:w-[60%] before:absolute before:-bottom-1 before:left-0 before:h-[3px] before-gradient-bg"
  >
    <span
      className={
        pathname == link ? "gradient-text" : ""
      }
    >
      {name}
    </span>
  </div>
</Link>
</li>
            ))}
            
      
          </ul>

        </nav>
      </header>

      <header className={`z-[60] top-0 left-0 right-0 bottom-0 fixed lg:hidden bg-default  h-full w-full transition ${drawerOpen ? "-translate-x-0" : "-translate-x-full"}`}>
        <nav className="h-full w-full flex flex-col justify-between items-center px-6">

          <button onClick={handleDrawerToggle} className="absolute block sm:hidden top-6 right-6 text-title p-1.5 rounded-2xl">
            <CloseIcon fontSize="24px" />
          </button>

          <ul className="my-8 mt-6 ml-2 flex-grow flex flex-col align-center w-full " onClick={handleDrawerToggle}>
        <Link href='/'>
          <h1
            className="text-5xl mb-8 flex gap-2 items-center pl-4   leading-relaxed  text-title">
            <Image alt='logo' className='w-12' src="/assets/logo.png" width={80} height={20}/>
            <span className='text-xl dark:text-red-500'>
            Neurovance 
            </span>
          </h1>
              </Link>
            {nav.map(({ name, icon, link }, index) => (
              <li   key={index} onClick={() => handleScroll(link)} className="py-1.5 flex items-center justify-start select-none text-base gap-2 font-semibold cursor-pointer text-title hover:gradient-text">
                <span className='text-2xl'>
                  {icon}
                </span>

                {name}
              </li>
            ))}
          </ul>

        </nav>
      </header>
  </>

  )
}

export default Header