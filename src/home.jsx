import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const home = () => {
  return (
    <div>
    
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Hireme />
      {/* <Contact /> */}
      <Footer />
   
    </div>
  )
}

export default home
