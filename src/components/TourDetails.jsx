import React from "react";
import tourPlan from "../assets/tourPlan.png";

const TourDetails = () => {
  const project = {
    title: "Tour-Plan",
    url: "https://greeho-sheba-c3c63.web.app",
    description:
      "This is a full-stack customer review giving platform about tourist service.",
    technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
    image: `${tourPlan}`,
    time: "20 Oct 2022 - Present",
  };
  return (
    <div>
      <img src={project.image} alt="" />
    </div>
  );
};

export default TourDetails;
