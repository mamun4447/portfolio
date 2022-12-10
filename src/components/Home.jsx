import "./Home.css";
import React from "react";
import background from "../assets/background.jpg";
import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className=" absolute">
        <img className="fixed h-full" src={background} alt="" />
      </div>
      <header className="bg-slate-900 h-full bg-opacity-70 text-white  relative pattern px-10">
        <div className="md:container px-6 mx-auto ">
          <Nav />

          <Hero />
          <Projects />
          {/* <Skills /> */}
          <Contact />
          <Footer />
        </div>
      </header>
    </>
  );
};

export default Home;
