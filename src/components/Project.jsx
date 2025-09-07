import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import musicapp from "../assets/images/musicapp.jpg";
import project2 from "../assets/images/zam-bus.png";
import project3 from "../assets/images/project-3.png";
import webmarck from "../assets/images/webmarck.png";
import iot from "../assets/images/iot.png";
import hre from "../assets/images/hre.png";                
import project_person from "../assets/images/project_person1.jpg";
import mobileapp from "../assets/images/mobileapp.jpg";
import book8 from "../assets/images/book8website.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const ProjectSection = ({ title, projects = [] }) => {
  return (
    <section className="py-10">
      <h3 className="text-3xl font-semibold mb-8">{title} ({projects.length})</h3>
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-cyan-600 rounded-full text-white font-semibold">
                    {i + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech && project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs bg-slate-700 rounded-full text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-slate-700 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const Project = () => {
  const projects = {
    webApps: [
      // {
      //   img: book8,
      //   name: "Book8 Learning Platform",
      //   description: "A comprehensive online learning management system",
      //   tech: ["Next.js", "MongoDB", "Node.js"],
      //   github_link: "https://github.com/Jamadrac",
      //   live_link: "https://book8.vercel.app/",
      // },
      
    {
        img: webmarck,
        name: "React Express Prisma App",
        description: "Full-stack application with real-time features using React, Express.js, and Prisma ORM",
        tech: ["React", "Express.js", "iot", "gps", "Prisma", "PostgreSQL", "iot"],
        github_link: "https://github.com/Jamadrac",
        live_link: "https://webmarck.vercel.app/",
      },
      {
        img: iot,
        name: "Inventory Management System",
        description: "Full-featured inventory tracking and management solution",
        tech: ["React", "Node.js", "MongoDB"],
        github_link: "https://github.com/Jamadrac",
        live_link: "https://inventoryxcx.vercel.app/sales",
      },
      {
        img: project2,
        name: "ZamBus Booking System",
        description: "Online bus ticket booking and management platform",
        tech: ["React", "Express", "MongoDB"],
        github_link: "https://github.com/Jamadrac",
        live_link: "https://zam-bus.vercel.app/",
      },
    ],
    mobileApps: [
      {
        img: musicapp,
        name: "Music Player App",
        description: "Feature-rich music player with playlist management",
        tech: ["Flutter", "Dart", "Audio API"],
        github_link: "https://github.com/Jamadrac/jamadracpdf",
        live_link: "https://github.com/Jamadrac/apks/raw/main/app-release.apk",
      },
      {
        img: webmarck,
        name: "GPS Tracking App",
        description: "Real-time GPS tracking mobile application with location sharing capabilities",
        tech: ["Flutter", "Dart", "Google Maps", "Location Services"],
        github_link: "https://github.com/Jamadrac/webmarkapp",
        live_link: "https://github.com/Jamadrac/webmarkapp/raw/refs/heads/main/build/app/outputs/flutter-apk/app-release.apk",
      },
      // {
      //   img: book8,
      //   name: "Book8 Kids Learning App",
      //   description: "Interactive mobile learning platform for children with engaging educational content",
      //   tech: ["Flutter", "Dart", "Educational API"],
      //   github_link: "https://github.com/Jamadrac/book8app",
      //   live_link: "https://raw.githubusercontent.com/Jamadrac/book8app/refs/heads/main/build/app/outputs/flutter-apk/app-release.apk",
      // }
    ]
  };

  return (                                    
    <div className="py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-cyan-600">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my best work in web and mobile development
          </p>
        </div>

        <div className="space-y-16">
          <ProjectSection title="Web Applications" projects={projects.webApps} />
          <ProjectSection title="Mobile Applications" projects={projects.mobileApps} />
        </div>
      </div>
    </div>
  );
};

export default Project;
