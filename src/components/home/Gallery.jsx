import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 mt-16 md:mt-12 py-12">

      <div  className="flex w-full px-4 flex-col mb-20 flex-wrap items-start justify-center text-center">
        <h1 data-aos='fade-up'   className="text-3xl md:text-4xl mx-auto mb-4 !leading-tight font-semibold tracking-widest">
          Take A Look On Our <span className="gradient-text font-bold uppercase">Work</span> Gallary
        </h1>
        <p data-aos='fade-up'  data-aos-delay="150" className="mx-auto leading-relaxed text-sm md:text-base lg:max-w-[60%]">
        Discover how we've empowered businesses through innovative IT solutions, captured in moments that reflect our commitment to excellence and partnership.


        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div data-aos='zoom-in'  data-aos-delay="300" className="p-2 w-1/2">
            <Image
              alt="gallery"
              width={500}
              height={300}
              className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
              src="/assets/images/gallery/3.jpg"
            />
          </div>
          <div  data-aos='zoom-in'  data-aos-delay="300" className="p-2 w-1/2">
            <Image
              alt="gallery"
              width={500}
              height={300}
              className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
              src="/assets/images/gallery/4.jpg"
            />
          </div>
          <div  data-aos='zoom-in'  data-aos-delay="450" className="p-2 w-full">
            <Image
              alt="gallery"
              width={600}
              height={360}
              className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
              src="/assets/images/gallery/5.jpg"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2">
          <div  data-aos='zoom-in'  data-aos-delay="300" className="p-2 w-1/2 md:w-full">
            <Image
              alt="gallery"
              className="w-full h-full rounded-xl md:rounded-3xl object-cover object-center block"
              width={600}
              height={360}
              src="/assets/images/gallery/2.jpg"
            />
          </div>
          <div  data-aos='zoom-in'  data-aos-delay="450" className="p-2 w-1/2">
          <Image
              alt="gallery"
              className="w-full h-full rounded-xl md:rounded-3xl object-cover object-center block"
              width={600}
              height={360}
              src="/assets/images/gallery/1.jpg"
            />
          </div>
          <div   data-aos='zoom-in'  data-aos-delay="450" className="p-2 w-full md:w-1/2">
          <Image 
              alt="gallery"
              className="w-full h-full rounded-xl md:rounded-3xl object-cover object-center block"
              width={600}
              height={360}
              src="/assets/images/gallery/6.jpg"
            />
          </div>
        </div>
        <div  data-aos='zoom-in'  data-aos-delay="600" className="flex flex-wrap w-full md:w-1/3">
        <Image
              alt="gallery"
              className="w-full h-full rounded-xl md:rounded-3xl object-cover object-center block"
              width={600}
              height={360}
              src="/assets/images/gallery/7.jpg"
            />
          </div>
          <div  data-aos='zoom-in'  data-aos-delay="600" className="p-2 w-full md:w-2/3">
            <video loop={true} className=' rounded-xl md:rounded-3xl  overflow-hidden object-cover object-center h-full w-full' controls muted autoPlay>
              <source width={500}
             height={300} src="/assets/videos/1.mp4" type="video/mp4"/>
            </video>
        </div>
      </div>
    </div>

  )
}

export default Gallery