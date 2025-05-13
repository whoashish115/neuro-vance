"use client"
import React, { useEffect } from 'react'
import gsap from "gsap";

const Cursor = () => {
    
  useEffect(() => {
    let cursor = "#cursor .dot";
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })

    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursor, 0.2, {
        x: mouseX, y: mouseY, stagger: 0.15, ease: "none", scale: i => (i + 2) * 0.2,
      });
      let timeline = gsap.timeline({
        defaults: { duration: 0.2, ease: "none" },
      })
      timeline.to(cursor, {
        stagger: { amount: 0.1, from: "start", ease: "none" }
      })

    });
    const hideCursor = () => gsap.to(cursor, { opacity: 0 });
    const showCursor = () => gsap.to(cursor, { opacity: 1 });

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  }, []);
  return (
     <div id="cursor" className="relative overflow-hidden">
        <div className="dot opacity-0 scale-[0.2] border-title border-[4px]  pointer-events-none fixed hidden lg:block z-[1000] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm" />
        <div className="dot opacity-0 scale-[0.4] border-secondary border-[3px] pointer-events-none fixed hidden lg:block z-[1000] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm" />
        <div className="dot opacity-0 scale-[0.6] border-tertiary border-[3px] pointer-events-none fixed hidden lg:block z-[999] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm" />
        <div className="dot opacity-0 scale-[0.8] border-primary border-[3px] pointer-events-none fixed hidden lg:block z-[998] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm" />
      </div>
  )
}

export default Cursor