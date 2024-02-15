import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/recepts.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.jpg";
import mobileapp from"../assets/images/mobileapp.jpg"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";



  const projects_mobile_apps = [
    {
      img: project1,
      name: "flutter pdf reader ",
      github_link: "https://github.com/Jamadrac/jamadracpdf",
      live_link: "https://github.com/Jamadrac/apks/raw/main/app-release.apk",
    },
    // {
    //   img: project2,
    //   name: "mutivender E-commerce app",
    //   github_link: "https://github.com/Jamadrac-C-25/jobsearchapp",
    //   live_link: "https://myjobsearch.netlify.app",
    // },
   
    
  ];

const Project = () => {
  const projects_websites = [
    {
      img: project1,
      name: "online recepts storeg (django)",
      github_link: "https://github.com/Jamadrac-C-25",
      live_link: "https://printeck.onrender.com",
    },
    {
      img: project2,
      name: " E-commerce shop + android app",
      github_link: "xxxxxxxxxxxx",
      live_link: "https://withinzed.vercel.app/",
    },
    {
      img: project3,
      name: "landing page",
      github_link: "#",
      live_link: "https://www.tokpayapp.xyz/",
    },
    {
      img: project4,
      name: "Api securit auth-encryption",
      github_link:
        "https://github.com/Jamadrac/backend-js/tree/master",
      live_link: "https://meps-nodejs-api.vercel.app/",
    },
    {
      img: project5,
      name: "gps tracking systen",
      github_link: "https://github.com/Jamadrac-C-25",
      live_link: "https://webamrck.vercel.app/",
    },
    {
      img: project5,
      name: "gps mobile app",
      github_link: "#",
      live_link: "https://webamrck.vercel.app/",
    },
    {
      img: project5,
      name: "maps tracking service -react js",
      github_link: "#",
      live_link: "https://vercel.com/jamadrac/frontend",
    },
  ];
 
  return (<>
  <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects_websites.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>




    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Mobile Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
        
            {projects_mobile_apps.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={mobileapp} alt="" />
        </div>
      </div>
    </section>
    
    </>
    
  );
};

export default Project;
