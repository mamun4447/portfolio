import React from "react";
import { useParams } from "react-router-dom";
import greeho from "../assets/greeho.png";

const GrehoDetails = () => {
  const project = {
    title: "Greeho-Sheba",
    url: "https://greeho-sheba-c3c63.web.app",
    description:
      "Full-stack service Providing website. Where customer and Provider can get each-other.",
    technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
    image: `${greeho}`,
    time: "20 Oct 2022 - Present",
  };

  console.log(project);
  //   const project = projects.filter();
  return <div></div>;
};

export default GrehoDetails;
