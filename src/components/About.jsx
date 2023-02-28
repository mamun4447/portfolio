import React from "react";
import { FaDownload } from "react-icons/fa";
import aboutme from "../assets/social-media-marketing.png";

import Reveal from "react-reveal/Reveal";
const About = () => {
  return (
    <div id="about" className="my-16">
      <h1 className="text-5xl text-center">
        About <span className="text-accent">Me</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <Reveal effect="fadeInUp">
          <figure>
            <img className="" src={aboutme} alt="Album" />
          </figure>
          <div className="">
            <h2 className="card-title">Abdullah Al-Mamun</h2>
            <p className="md:w-[75%] my-3">
              I am a Frontend(ReactJs)/Full-Stack(MERN) web developer with 1
              year+ of learning/working experience, and build some projects
              based on MERN, I love to work with logic and build it by
              programming, one more thing, I love to learn new technologies with
              very much excitement. My experiences, training, and dedication to
              the field of web development with my ability to build an
              attractive web application.
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              abdullah.mamun67896@gmail.com
            </p>
            <p>
              <span className="font-bold">Contact:</span> +8801789997959
            </p>
            <p>
              <span className="font-bold">Address:</span> Pabna, Bangladesh
            </p>
            <a href="/" className="btn btn-accent my-3">
              <FaDownload className="mr-2" /> Resume
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
