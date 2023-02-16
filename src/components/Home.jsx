import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="md:container px-6 ">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;
