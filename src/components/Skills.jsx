import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import vite from "../assets/vite.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:bg-orange-500/30",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:bg-blue-500/30",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "hover:bg-yellow-500/30",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "hover:bg-sky-200/30",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "hover:bg-sky-400/30",
    },
    {
      id: 6,
      src: vite,
      title: "Vite",
      style: "hover:bg-purple-400/30",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "hover:bg-gray-400/30",
    },
  ];

  return (
    <div id="skills" className="bg-[#fffffe] w-10/12 h-fit mx-auto">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-[#094067]">
        <div className="text-[#5f6c7b] text-center sm:text-start">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-center">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` hover:scale-105 ${style} duration-500 py-2 round-lg rounded-lg `}
            >
              <img src={src} className="w-15 mx-auto" alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
