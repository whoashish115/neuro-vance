'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
// import VisibilitySensor from "react-visibility-sensor";

const CountUp = dynamic(()=> import('react-countup'), {ssr:false})

const Ticker = ({ count, decimal }) => {
  const [started, setStarted] = useState(false);
  
  return (
   <CountUp start={0} end={count} duration={2.5} decimals={decimal}>
      {({ countUpRef, start }) => (
        // <VisibilitySensor
        //   onChange={(e) => {
        //     if (!started && e) {
        //       start();
        //       setStarted(true);
        //     } else {
        //     }
        //   }}
        // >
          <span ref={countUpRef} />
        // </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Ticker;
