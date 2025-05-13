import React from "react";

const Section = (props) => {
  const { id, children } = props;
  return (
    <section id={id}>
      {children && <div className="container mx-auto max-w-[1250px] font-normal overflow-hidden px-2 sm:px-4">{children}</div>}
    </section>
  );
};

export default Section;
