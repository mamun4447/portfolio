import React from "react";
import Lottie from "lottie-react";
import programmer from "../assets/18123-developer.json";

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
          Brand
        </h2>

        <h3 className="mt-2 text-2xl font-semibold text-gray-100">
          Hello <span className="text-accent  ">Guest</span>
        </h3>

        <p className="mt-4 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum
          modi incidunt adipisci quod porro et non exercitationem quasi, maxime
          culpa ut nemo ab delectus saepe iste nostrum explicabo a?
        </p>
        <a
          href="abdullah_al_mamun_resume.pdf"
          download="abdullah_al_mamun_resume.pdf"
        >
          <button className="btn btn-accent my-5">Resume</button>
        </a>
      </div>

      <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
        <Lottie animationData={programmer} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
