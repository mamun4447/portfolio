import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import background from "../../assets/background.jpg";
import Nav from "../Nav";

const Main = () => {
  return (
    <div>
      <div className=" absolute">
        <img className="fixed h-full" src={background} alt="" />
      </div>
      <header className="bg-slate-900 h-full bg-opacity-70 text-white  relative pattern px-10 ">
        <div className="container mx-auto">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      </header>
    </div>
  );
};

export default Main;
