import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../assets/images/iot.png";
import cv from "../assets/CV.pdf";

const About = () => {
  const info = [
    { text: "years in experience", count: "04" },
    { text: "completed projects in-production", count: "04" },
    { text: "companies worked with", count: "02" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-8 w-full">
          <h3 className="text-4xl font-semibold">
            About <span className="text-cyan-600">me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">who am i & what i can do</p>
        </div>

        <div className="max-w-5xl w-full flex md:flex-row flex-col-reverse items-center justify-center md:gap-12 gap-8">
          <div className="md:w-1/2 w-full">
            <div className="text-gray-400 space-y-4">
              <p className="text-justify leading-relaxed">
                Hello, I'm Rabbi, a versatile full-stack developer specializing
                in creating immersive web applications. With expertise in both
                front-end and back-end development, I excel at building
                responsive user interfaces using modern frameworks like React,
                and flutter On the back-end, I'm skilled in server-side
                programming languages like Node.js, Python, as well as database
                integration and cloud platforms. With a results-driven mindset
                and a focus on collaboration, I thrive in agile development
                environments and deliver high-quality code that meets business
                objectives. I'm passionate about creating innovative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                {info.map((content) => (
                  <div key={content.text} className="text-center">
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                    </h3>
                    <span className="text-sm">{content.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <a href="https://docs.google.com/document/d/1sofvt47lmgjJVbGY-dGoqEC3fcm_usQsmwBe6pysA0o/edit?usp=sharing">
                  <button className="btn-primary">Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <img
              src={aboutimg}
              alt="About Me"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
