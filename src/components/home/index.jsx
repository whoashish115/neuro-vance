import React from 'react'
import Hero from './Hero'
import About from './About'
import { Section } from '..'
import CtaSection from './CtaSection'
import Gallery from './Gallery'
// import Testimonial from './Testimonial'
import Contact from './Contact'
import Services from './Services'

const Home = () => {
  return (
    <>
        <Hero />
      <Section id="about">
        <About />
      </Section>
        <Services />
      <Section id="cta">
        <CtaSection />
      </Section>
      
        <Section id="gallery">
          <Gallery />
        </Section>
       
         <Section id="contact">
        <Contact /> 
      </Section>
      </>
  )
}

export default Home