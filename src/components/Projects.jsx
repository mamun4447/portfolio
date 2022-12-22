import React from "react";
import { Link } from "react-router-dom";
import greeho from "../assets/greeho.png";
import getRide from "../assets/getRide.png";
import tourPlan from "../assets/tourPlan.png";
import Reveal from "react-reveal/Fade";

const Projects = () => {
  const projects = [
    {
      title: "Greeho-Sheba",
      url: "https://greeho-sheba-c3c63.web.app",
      description:
        "Full-stack service Providing website. Where customer and Provider can get each-other.",
      technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
      image: `${greeho}`,
      time: "20 Oct 2022 - Present",
    },
    {
      title: "Get-Ride",
      url: "https://get-ride-44eec.web.app/",
      description: "This is a full-stack service Bicycle reselling platform.",
      technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
      image: `${getRide}`,
      time: "23 Nov 2022 - Present",
    },
    {
      title: "Tour-Plan",
      url: "https://greeho-sheba-c3c63.web.app",
      description:
        "This is a full-stack customer review giving platform about tourist service.",
      technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
      image: `${tourPlan}`,
      time: "20 Oct 2022 - Present",
    },
  ];
  // console.log(projects);
  return (
    <div id="projects" className="py-16 mx-auto w-62  lg:py-20 ">
      <h1 className="text-5xl my-10 text-center">My Projects</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal effect="fadeInUp">
            <div
              key={project.title}
              className="overflow-hidden  duration-100  rounded shadow-sm hover:-translate-y-2 transition text-white"
            >
              <div className="overflow-y-auto">
                <img
                  src={project.image}
                  className="object-cover w-full h-52 "
                  alt=""
                />
              </div>
              <div className="p-5 border  bg-slate-200 opacity-70  h-62">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— {project.time}</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className=" text-black inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {project.title}
                </a>
                <p className="mb-2 text-gray-700">{project.description}</p>
                <p className="mb-2 text-gray-700">
                  <span className="font-bold">Technologies: </span>
                  {project.technologies}.
                </p>
                <div className="flex justify-center items-center py-2 gap-3">
                  <a href={project.url} className="btn btn-accent btn-sm">
                    Live Site
                  </a>
                  <Link
                    to={`/details/${project.title}`}
                    className="btn btn-primary btn-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
