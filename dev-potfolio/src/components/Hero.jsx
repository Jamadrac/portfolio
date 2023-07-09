import React from "react";
import hero from '../assets/images/hero.png'
const Hero = () => {
  return (<section id="home"
  className="mi-h-screen fix py-10 md:flex-row flex-col items-center">
    <div>
      <img src={hero} alt="" className="md:w-11/12 h-full object-cover"/>
    </div>
    <div className="flex-1 flex items-center justify-center">
      
    </div>
  </section>)
};
  
export default Hero;
