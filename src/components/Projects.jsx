import React from "react";
import greeho from "../assets/greeho.png";
import getRide from "../assets/getRide.png";
import tourPlan from "../assets/tourPlan.png";
import Reveal from "react-reveal/Fade";
import quiz from "../assets/quiz.png";
import developer from "../assets/developer.png";
import test from "../assets/test.png";

const Projects = () => {
  const projects = [
    {
      title: "Greeho-Sheba",
      url: "https://greeho-sheba-c3c63.web.app",
      description:
        "Full-stack service Providing website. Where customer and Provider can get each-other.",
      technologies:
        "RectJs, Tailwind CSS, NodeJs, ExpressJs, REST API, MongoDB, Firebase Auth, React Icon, Lottie files, npm packages",
      image: `${greeho}`,
      time: "20 Oct 2022 - Present",
    },
    {
      title: "Get-Ride",
      url: "https://get-ride-44eec.web.app/",
      description: "This is a full-stack service Bicycle reselling platform.",
      technologies:
        "RectJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, REST API Firebase Auth, React Icon, Lottie files, npm packages",
      image: `${getRide}`,
      time: "23 Nov 2022 - Present",
    },
    {
      title: "Tour-Plan",
      url: "https://greeho-sheba-c3c63.web.app",
      description:
        "This is a full-stack customer review giving platform about tourist service.",
      technologies:
        "RectJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Firebase Auth, REST API, React Icon, Lottie files, npm packages",
      image: `${tourPlan}`,
      time: "20 Oct 2022 - Present",
    },
    {
      title: "Be-Developer",
      url: "https://bedeveloper-67b45.web.app/",
      description:
        "This is a full-stack customer review giving platform about development technologies.",
      technologies:
        "RectJs, Tailwind CSS, NodeJs, ExpressJs, Firebase Auth, REST API , React Icon, Lottie files, npm packages",
      image: `${developer}`,
      time: "10 Oct - 15 Oct 2022",
    },
    {
      title: "Quiz-Quiz",
      url: "https://quiz-mamun.netlify.app/",
      description:
        "This is a full-stack customer review giving platform about quiz giving.",
      technologies:
        "RectJs, Javascript, React router, Tailwind CSS, REST API , React Icon, Lottie files, npm packages",
      image: `${quiz}`,
      time: "25 Aug - 28 Aug 2022",
    },
    {
      title: "Typing Speed Test",
      url: "https://speed-test-mamun.netlify.app/",
      description:
        "This is a front end typing speed test website, where user can check typing speed.",
      technologies:
        "Javascript, HTML5, CSS3, Local Storage, Bootstrap CSS, REST API",
      image: `${test}`,
      time: "01 Aug - 03 Aug 2022",
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
              className="overflow-hidden max-h-[480px] duration-100  rounded shadow-sm hover:-translate-y-2 transition text-white"
            >
              <div className="overflow-y-auto">
                <img
                  src={project.image}
                  className="object-cover w-full h-52 "
                  alt=""
                />
              </div>
              <div className="p-5 border  bg-slate-200 opacity-70">
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
                <div className="text-end mr-3 py-2 gap-3">
                  <a href={project.url} className="btn btn-accent btn-sm">
                    Live Site
                  </a>
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
