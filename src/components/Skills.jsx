import React from "react";
import Reveal from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto  my-20">
      <h1 className="text-5xl font-bold text-center my-10">
        Skill<span className="text-accent">s</span>
      </h1>
      <Reveal effect="fadeInUp">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 item-center justify-center">
          {/* <===HTML===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="HTML5"
          >
            <img
              src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
              alt=""
              className="w-32 shadow-2xl rounded-full p-4 border h-32"
            />
            <h1 className="text-2xl text-center">HTML5</h1>
          </div>

          {/* <===CSS===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="CSS3"
          >
            <img
              src="https://www.shareicon.net/download/2015/09/17/102347_css3.ico"
              alt=""
              className="w-32 shadow-2xl rounded-full p-4 border h-32"
            />
            <h1 className="text-2xl text-center">CSS3</h1>
          </div>

          {/* <===Tailwind===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="Tailwind CSS"
          >
            <img
              src="https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png"
              alt=""
              className="w-32 shadow-2xl rounded-full p-4 border h-32"
            />
            <h1 className="text-2xl text-center">Tailwind CSS</h1>
          </div>

          {/* <===ReactJs===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="ReactJS"
          >
            <img
              src="https://toppng.com/uploads/preview/react-logo-icon-11609374122d9vkbptqap.png"
              alt=""
              className="w-32 shadow-2xl rounded-full p-4 border h-32"
            />
            <h1 className="text-2xl text-center">ReactJs</h1>
          </div>

          {/* <===NodeJs===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="NodeJs"
          >
            <img
              src="https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png"
              alt=""
              className="w-32 h-32 shadow-2xl rounded-full p-4 border"
            />
            <h1 className="text-2xl text-center">NodeJs</h1>
          </div>

          {/* <===<MongoDB>===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="MongoDB"
          >
            <img
              src="https://mpng.subpng.com/20190328/sei/kisspng-mongodb-database-nosql-shard-iasi-mongodb-user-group-iasi-mee-5c9d9325e02767.5082779215538306939181.jpg"
              alt=""
              className="w-32 h-32 shadow-2xl rounded-full p-4 border"
            />
            <h1 className="text-2xl text-center">MongoDB</h1>
          </div>

          {/* <===<Django>===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="Django"
          >
            <img
              src="https://icon2.cleanpng.com/20180711/fol/kisspng-django-web-development-web-framework-python-softwa-django-5b45d913c5b252.5696191815313042118098.jpg"
              alt=""
              className="w-32 h-32 shadow-2xl rounded-full p-4 border"
            />
            <h1 className="text-2xl text-center">Django</h1>
          </div>

          {/* <===<Prolem Solving>===> */}
          <div
            className="mx-auto hover:-translate-y-1 hover:shadow-2xl"
            title="Django"
          >
            <img
              src="https://www.pngitem.com/pimgs/m/175-1757404_problem-solving-png-transparent-png.png"
              alt=""
              className="w-32 h-32 shadow-2xl rounded-full p-4 border"
            />
            <h1 className="text-2xl text-center">
              Problem <br /> Solving <br /> 100+
            </h1>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
