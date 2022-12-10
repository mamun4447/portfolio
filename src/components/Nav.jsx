import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <a
            href="/"
            className="text-2xl font-semibold text-white hover:text-gray-300"
          >
            Abdullah Al-Mamun
          </a>
        </div>

        <div className="flex items-center mt-2 -mx-2 sm:mt-0">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Projects</a>
            </li>
            <li tabIndex={0}>
              <a>Skills</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
