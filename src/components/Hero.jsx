import React, { useEffect, useRef, useState } from "react";
import her from "../assets/images/hre.png";
import { slideInLeft } from "../animations/gsapAnimations";
import { gsap } from "gsap";


const Hero = () => {
  const sectionRef = useRef(null);
  const socialMediaLinks = {
    // "logo-instagram": "https://www.instagram.com/your_username",
    "logo-facebook": "https://web.facebook.com/jamadrac/",
    "logo-linkedin": "https://zm.linkedin.com/in/rabbi-kindalo-209b0026a",
    // "logo-twitter": "https://twitter.com/your_username",
    "logo-whatsapp": "https://wa.me/260975627608",
  };

  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial state (off-screen left)
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

  // Typing animation state
  const phrases = [
    "Fullstack Developer",
    "engineering mindset",
    "result oriented"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < phrases[currentPhrase].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            phrases[currentPhrase].slice(0, displayedText.length + 1)
          );
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
      } else {
        setTyping(true);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentPhrase, phrases]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={her} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Rabbi kindalo</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 min-h-[2.5rem]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h4>
          <a
            href="https://wa.me/260975627608"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary mt-8 flex items-center gap-2">
              <ion-icon name="logo-whatsapp"></ion-icon>
              Connect on WhatsApp
            </button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.entries(socialMediaLinks).map(([icon, url]) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-cyan-400 cursor-pointer transition-transform duration-300 hover:scale-125"
                onClick={() => handleSocialMediaClick(url)}
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
