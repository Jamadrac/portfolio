import React from "react";
import her from "../assets/images/hre.png";

const Hero = () => {
  const socialMediaLinks = {
    // "logo-instagram": "https://www.instagram.com/your_username",
    "logo-facebook": "https://web.facebook.com/jamadrac/",
    "logo-linkedin": "https://zm.linkedin.com/in/rabbi-kindalo-209b0026a",
    // "logo-twitter": "https://twitter.com/your_username",
  };

  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
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
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Connect with Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.entries(socialMediaLinks).map(([icon, url]) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
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
