import React from "react";

const Container = (props) => {
  const { id, title, subtitle, description, children, className } = props;
  return (
    <section id={id ? id : ""} className={`px-3 sm:px-6 md:px-12  py-16  ${className}`}>
      <div className=" max-w-[1250px] mx-auto">

      {(subtitle || title || description) && <div className="flex-col flex justify-center items-start  px-3 sm:px-6 md:px-12 pb-8 sm:pb-10 md:pb-12 mt-2 md:mt-12 gap-4">
        {subtitle && <span className='text-lg uppercase font-bold gradient-text mb-1 xs:mb-4 md:max-w-[600px]'>{subtitle}</span>}
        {title && <h3 className='text-2xl md:text-3xl font-secondary  capitalize font-bold mb-2 xs:mb-3 text-title'>{title}</h3>}
        {description && <p className="text-lg lowercase  font-semibold md:max-w-[600px]">{description}</p>}
      </div>}

      <div className="px-3 sm:px-6 md:px-12 ">
        {children}
      </div>

      </div>
    </section>
  );
};

export default Container;
