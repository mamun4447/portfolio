import React from "react";
import Lottie from "lottie-react";
import programmer from "../assets/18123-developer.json";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center py-6 lg:h-[36rem] lg:flex-row">
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
          <span className="text-2xl">Hello, This is</span> <br />{" "}
          <span className="text-accent">Abdullah Al-Mamun</span>
        </h2>
        <TypeAnimation
          className="text-accent"
          // Same String at the start will only be typed once, initially
          sequence={[
            "Full-Stack Web Developer",
            1000,
            "MERN Stack Web Developer",
            1000,
            "Front-End Web Developer",
            1000,
            "ReactJs Web Developer",
            1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "2em" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        <p className="mt-4 text-white">
          I am a Frontend(ReactJs)/Full-Stack(MERN) web developer with 6 months
          of learning/working experience. I love to work with logic and build it
          by programming.
        </p>
        <a
          href="abdullah_al_mamun_resume.pdf"
          download="abdullah_al_mamun_resume.pdf"
          className="mr-3"
        >
          <button className="btn btn-accent my-5 ">
            <FaDownload className="mr-2" /> Resume
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/al-mamun-abdullah"
          className="btn btn-accent "
        >
          <FaLinkedin className="mr-2" />
          Hire Me
        </a>
      </div>

      <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
        <Lottie animationData={programmer} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
