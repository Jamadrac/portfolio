import React from "react";
import aboutimg from "../assets/images/about.png"

const About = () => {
  const info=[
    {text:'years experience',count:'04'},
    {text:'completed projects',count:'04'},
    {text:'companies worked with',count:'04'},
  ]
  return <section id="about" className="py-10 text-white"> 
    <div className="text-center mt-8">
      <h3 className="text-4xl font-semibold">
        About <span className="text-cyan-600">me</span>
      </h3>
      <p className="text-gray-400 my-3 text-lg">who am i & what i can do</p>
      <div className="flex md:flex-row flex-col-reverse items-center
       md:gap-6 gap-12 px-12 max-w=-6x1 mx auto">
        <div>
          <div className="text-gray-400 my-3">
            <p className="text-left">
            Hello, I'm Rabbi, a versatile full-stack developer specializing in creating immersive web applications. With expertise in both front-end and back-end development, I bring ideas to life and deliver seamless user experiences. I excel at building responsive user interfaces using modern frameworks like React, Angular, and Vue.js. On the back-end, I'm skilled in server-side programming languages like Node.js, Python, and Ruby on Rails, as well as database integration and cloud platforms. With a results-driven mindset and a focus on collaboration, I thrive in agile development environments and deliver high-quality code that meets business objectives. I'm passionate about creating innovative solutions and constantly staying up-to-date with the latest technologies.
            </p>
            <div className="flex mt-10 items-center gap-7">
              {
                info.map(content=>(
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}</h3>
                  <span>{content.text}</span>
                </div>
              ))}
              <a href="./src/assets/code_a_program.pdf" download><button className="btn-primary mt">Download My CV</button>
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
            <img src={aboutimg}
             alt=""className="      " />
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default About;
