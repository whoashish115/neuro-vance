import React from 'react'
import { services } from '../../data/services'

const Services = () => {
  return (
    <section id="services" className="overflow-hidden">
      <div className="flex flex-col  gap-12 justify-center w-full items-center max-w-[1250px] mx-auto relative py-5 xs:py-10 md:py-16 px-5 sm:px-8 md:px-12 lg:px-24 ">

        <div className="flex gap-4 flex-col w-full  justify-center items-center lg:w-3/4 px-4 pt-8 lg:pt-12 pb-12 lg:pb-20 m-auto ">
          <h5 data-aos="fade-up"  className="uppercase gradient-text text-center font-semibold lg:leading-relaxed text-lg md:text-xl lg:text-2xl  tracking-widest ">
            Explore Our
            Services
          </h5>
          <h2  data-aos="fade-up"  data-aos-delay="150" className="text-2xl sm:text-3xl lg:text-4xl text-title text-center lowercase lg:leading-relaxed font-semibold"> 
            Crafting stories through
            design and innovation
          </h2>
        </div>

        <div className="grid  w-full  overflow-hidden gap-4 ">
          {services.map(({ icon, title, description }, i) => (
            <div key={i} className={`  transition-transform   grid md:grid-cols-2  relative gap-12  justify-center items-center`}>
              <h1 data-aos='zoom-in' data-aos-delay={150*i} style={{ order: i % 2 == 0 ? 0 : 1 }} className={`text-9xl md:block text-title hidden ${i % 2 !== 0 ? 'items-start justify-start text-center' : 'md:items-end md:text-center md:justify-end'}`}>
                #<span className='gradient-text'>{i + 1}</span>
              </h1>
              <div data-aos='zoom-in' data-aos-delay={150*(i +1)} className={`flex flex-col bg-paper   hover:bg-box lg:py-10 py-6 px-3 sm:px-6  rounded-2xl border-outline border gap-2 ${i % 2 == 0 ? 'items-start justify-start text-start' : 'md:items-end md:text-end md:justify-end'} `}>
                <span className={`text-5xl sm:text-6xl mb-6 md:block hidden font-light text-title `}>{icon}</span>
                <h3 className='text-2xl md:text-4xl font-extrabold  text-title capitalize  '> <div style={{ order: i % 2 == 0 ? 0 : 1 }} className={`text-4xl md:hidden flex gap-4 items-center`}>
                  <span className=''>#{i + 1}</span>
                  <span className={`text-5xl sm:text-6xl  font-light text-title `}>{icon}</span>
                </div>

                  <span className='gradient-text'>

                    {title}
                  </span>
                </h3>
                <p className='font-light text-paragraph   '>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  )
}


export default Services