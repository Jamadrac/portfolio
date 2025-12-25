import React, { useEffect, useRef } from 'react'
import { slideInLeft } from "../animations/gsapAnimations";
import { gsap } from "gsap";

const Gallary = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.set(section, { opacity: 0, x: -100 });
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          slideInLeft(section, 1.2);
        } else {
          gsap.to(section, { opacity: 0, x: -100, duration: 0.5 });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={sectionRef}>
      example
      
    </div>
  )
}

export default Gallary
