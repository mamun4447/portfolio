import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex flex-col py-6 sm:flex-row justify-center md:justify-between items-center md:items-center sticky top-0">
        <div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-semibold text-accent hover:text-gray-300"
          >
            Abdullah Al-Mamun
          </Link>
        </div>

        <div className="flex items-center mt-2 -mx-2 sm:mt-0">
          <ul className=" px-1 flex flex-wrap gap-3 md:gap-5 justify-center">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
