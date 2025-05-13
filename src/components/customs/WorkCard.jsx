"use client"
import React, {  useEffect, useState } from 'react'
import Image from "next/image";
import {
    HiOutlineCode as CodeIcon,
    HiOutlineExternalLink as ExternalLinkIcon,
    HiOutlineVideoCamera as VideoCameraIcon,
    HiOutlineX as CloseIcon,
} from 'react-icons/hi'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

const WorkCard = (props) => {
    const { work } = props
    const [open, setOpen] = useState(false)
    const mode  = "dark"

      const thisThemeThumbnails = mode ? work.thumbnails[mode] :[]
      const otherThemeThumbnails = mode?  (work.thumbnails[mode=='light'?'dark' : 'light']) : []
      const allThumbnails = [...thisThemeThumbnails, ...otherThemeThumbnails]
      const thumbnail = allThumbnails.length ?(thisThemeThumbnails.length ?thisThemeThumbnails[0] : otherThemeThumbnails[0]) :''
      

    const pagination = {
        clickable: true,
        type: 'bullets',
        renderBullet: function (className) {
            return `<span className="swiper-pagination-bullet ${className}" ></span>`
        },
    };


    return (
        <>
            <div onClick={() => setOpen(false)} className={`${open ? "!opacity-100 !pointer-events-auto" : " pointer-events-none"} transition-opacity backdrop-blur-sm bg-black/70 top-0 left-0 bottom-0 right-0 fixed z-[51] opacity-0`}></div>

            <div className={`${open ? "" : "!opacity-0 !pointer-events-none"} flex bg-paper border-2 border-outline rounded-2xl fixed z-[52] p-5 md:p-10 flex-col left-[5%] right-[5%] md:left-[10%] md:right-[10%] top-[50%] translate-y-[-50%]`}>
                <div onClick={() => setOpen(false)} className="absolute z-20 top-5 right-5 p-1.5 md:p-2 cursor-pointer rounded-xl gradient-bg text-white stroke-[3px] ">
                    <CloseIcon fontSize="20px" />
                </div>
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5 lg:gap-10 ">
                    {allThumbnails.length &&<div className='leading-[0px] relative h-full overflow-clip '>

                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[Pagination]}
                            className="h-full"
                            pagination={pagination}
                        >
                            {allThumbnails.map((th, index) => (
                                <SwiperSlide key={index}>
                                    <div className='relative mb-16'>

                                        {
                                            th.includes("mp4") ?
                                                <video className="w-full rounded-2xl object-cover object-center" src={th} alt="thumbnail" width={700} height={450} controls>
                                                    <source src={th} type="video/mp4" />
                                                </video>
                                                : <Image
                                                    width={700}
                                                    height={450}
                                                    className="w-full h-full rounded-2xl object-cover object-center"
                                                    src={th}
                                                    alt="thumbnail"
                                                    loading="lazy"
                                                />
                                        }
                                    </div>
                                </SwiperSlide>
                            ))}
                            {work.embed && open && <SwiperSlide>
                                <div className='pb-16 h-full'>
                                    <div className='h-full'>
                                        <iframe width={700} height={450} className="w-full h-full rounded-2xl object-cover object-center" src={work.embed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                                    </div>
                                </div>
                            </SwiperSlide>}
                        </Swiper>
                    </div>}
                    <div className='overflow-y-auto overflow-x-hidden'>
                        <h4 className='mb-2 text-base font-normal'>
                            <span className='gradient-text font-semibold'>Feature</span> - {work.categories.map((c, i) => i!= 0 ?(c.name + ", ") :'')}{work.subCategories.map((c, i) => i!= 0 ?( i == work.categories.length - 1 ? c.name : c.name + ", ") :'')}
                        </h4>
                        <h1 className='font-semibold text-title mb-3 text-xl capitalize md:text-2xl'>
                            {work.title}
                        </h1>
                        {work.description && <p className='text-base md:text-base'>
                            {work.description}
                        </p>}
                        <ul className='my-3 text-base md:text-base'>
                            <li>
                                <span className='text-title/80 font-semibold capitalize'>Created At</span> - {work.createdAt}
                            </li>
                            <li>
                                <span className='text-title/80 font-semibold capitalize'>Time</span> - {work.time}
                            </li>
                            <li>
                                <span className='text-title/80 font-semibold capitalize'>Technologies</span> - {work.technologies.map((t, index) => index == work.technologies.length - 1 ? t : t + ", ")}
                            </li>
                            <li>
                                <ul className='flex flex-col pt-4 '>
                                    {
                                        work.code && <li>
                                            <a href={work.code} target='_blank' rel="noreferrer">
                                                <span className='gradient-text cursor-pointer font-semibold flex mb-1 capitalize'><CodeIcon fontSize="20px" className='mr-2' />Source Code</span>
                                            </a>
                                        </li>}
                                    {work.video && <li>
                                        <a href={work.video} target='_blank' rel="noreferrer">
                                            <span className='gradient-text cursor-pointer font-semibold flex mb-1 capitalize'><VideoCameraIcon fontSize="20px" className='mr-2' />Video Demo</span>
                                        </a>
                                    </li>}
                                    {work.demo && <li>
                                        <a href={work.demo} target='_blank' rel="noreferrer">
                                            <span className='gradient-text cursor-pointer font-semibold flex mb-1 capitalize'><ExternalLinkIcon fontSize="20px" className='mr-2' />Live Demo</span>
                                        </a>
                                    </li>}
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} className={`max-w-[400px] p-2 md:p-4 my-4 md:my-4 md:mx-4 rounded-2xl bg-paper border-2 border-outline 2xl:mb-5 last:mb-0 ${work.subCategories.map((c) => " " + c.slug + " ")} work-item ${work.categories.map((c) => " " + c.slug + " ")}`}>

                <div className='leading-[0px]'>
                    {
                     thumbnail ?
                        (thumbnail.includes("mp4") ?
                            <video className="w-full rounded-2xl object-cover object-center" src={thumbnail} alt="thumbnail" width={700} height={450}>
                                <source src={thumbnail} type="video/mp4" />
                            </video>
                            : <Image
                                width={700}
                                height={450}
                                className="w-full rounded-2xl object-cover object-center"
                                src={thumbnail}
                                alt="thumbnail"
                                loading="lazy"
                            />)
                            :
                                                    (<Image
                                width={700}
                                height={450}
                                className="w-full rounded-2xl object-cover object-center"
                                src={'/assets/images/projects/no-image.png'}
                                alt="thumbnail"
                                loading="lazy"
                            />)
                    }
                </div>

                <div className='flex items-end justify-between mt-4 gap-4'>
                    <h6 className="py-5 pl-2 text-lg leading-[0px] capitalize font-semibold text-title">
                        {work.title}
                    </h6>
                    <div onClick={() => setOpen(true)}>
                        <motion.div  whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.9 }} className="py-5 px-5 leading-[0px] shadow-custom cursor-pointer font-semibold bg-box hover:bg-title/10 z-20 rounded-lg" >
                            <span className=' gradient-text '>
                            View
                            </span>
                        </motion.div>
                    </div>
                </div>



            </motion.div>
        </>

    )
}

export default WorkCard
