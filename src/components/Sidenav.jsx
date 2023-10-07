import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import "./Sidenav.css";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("stateChanged");
  };

  return (
    <div>
      {/* create navbar icon */}
      <AiOutlineMenu
        onClick={handleNav}
        className=" fixed top-4 right-4 md:hidden z-[99] "
      />
      {/* create nav mobile and desktop */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ">
          {/* home menu */}
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          {/* SKILL */}
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Skills</span>
          </a>
          {/* Project */}
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Project</span>
          </a>
          {/* Resume */}
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[34%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-[#3da9fc] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} className="text-[#fffffe]" />
          </a>
          <a
            href="#skills"
            className="rounded-full shadow-lg bg-[#3da9fc] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} className="icon" />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-[#3da9fc] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} className="text-[#fffffe]" />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-[#3da9fc] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} className="text-[#fffffe]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
