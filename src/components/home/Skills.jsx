import React from 'react'
import { skills } from '../../data/skills'
import {Container} from "..";
import { educations } from '../../data/global';

const Skills = () => {
  return (
    <Container id="skills" title="skills" subtitle="What are my advantages ?" description="I learned these skills in last few years of web development">

        <div className="grid lg:grid-cols-2 gap-6  mb-16">
          {educations.map(({title,company, description}, i) => (
            <div key={i} className="flex flex-col bg-title/5 p-4 rounded-lg justify-center gap-2 " >
              <span className={`text-xl   lg:text-2xl rounded-2xl border-4 bg-paper border-title/10 gradient-text font-semibold cursor-pointer  py-2 px-4 inline-flex mr-auto lg:px-6`}>{title}</span>
              <h3 className='text-2xl lg:text-3xl mt-2 text-title mx-4 font-medium'>{company}</h3>
              <p className='text-paragraph font-light  mx-4'>
                {description}
             
              </p>
            </div>
          ))}

        </div>
    </Container>
  )
}

export default Skills
