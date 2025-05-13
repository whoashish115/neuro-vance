import React from 'react'

const TitleAndDescription = (props) => {
  const { titleStart, titleHighlight, titleEnd, description, left, size = 2 } = props
  return (
    <div className={`flex w-full mb-6 flex-col flex-wrap items-start ${!left && "text-center"}`}>
    {(titleStart || titleHighlight || titleEnd) && <h1 data-aos="fade-up"  className={`!font-semibold text-title font-family max-w-[90%]  ${ size == 0 && "text-xl md:text-2xl mb-2" } ${ size == 1 && "text-2xl md:text-3xl mb-3" } !leading-snug ${ size == 2 && "text-3xl md:text-4xl mb-4" }  ${!left && "mx-auto"} font-semibold`}>
      {titleStart && titleStart + " "}
      {titleHighlight && <span className="uppercase gradient-text font-bold">{titleHighlight}</span>}
      {titleEnd && " " + titleEnd}
    </h1>}
    {description && <p data-aos="fade-up"  data-aos-delay="150" className={`!leading-relaxed text-sm md:text-base  ${!left && "mx-auto max-w-[90%] lg:max-w-[60%]"} `}>
      {description}
    </p>}
  </div>
  )
}

export default TitleAndDescription