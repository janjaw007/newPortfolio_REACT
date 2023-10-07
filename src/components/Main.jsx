import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const main = () => {
  return (
    <div id="main">
      <div className="w-full h-screen  top-0 left-0 bg-[#90b4ce]/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-[#094067] sm:text-5xl text-4xl font-bold ">
            I'm Chayanit Kitmek
          </h1>
          <h2 className="text-[#094067] flex sm:text-3xl text-2xl pt-4">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2500, // Waits 2s
                "Tech Enthusiast",
                3000,
                "Engineer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px", color: "#094067" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaGithub size={20} className="cursor-pointer text-[#3da9fc] " />
            <FaFacebookF size={20} className="cursor-pointer text-[#3da9fc]" />
            <FaInstagram size={20} className="cursor-pointer text-[#3da9fc]" />
            <FaLinkedinIn size={20} className="cursor-pointer text-[#3da9fc]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
