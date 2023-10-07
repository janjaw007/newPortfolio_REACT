import React from "react";
import ProjectItem from "./ProjectItem";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-1">
      <h1 className="text-4xl font-bold text-center sm:text-start text-[#094067]">
        Projects
      </h1>
      <p className="text-center sm:text-start py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur
        ipsam quas vitae, nostrum unde distinctio animi aperiam quis nisi esse
        et asperiores voluptatibus? Facere ratione necessitatibus aliquid optio
        quae.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={img2} title={"Crypto App"} />
        <ProjectItem img={img2} title={"Property App"} />
        <ProjectItem img={img4} title={"Netflix App"} />
        <ProjectItem img={img4} title={"Twitch App"} />
      </div>
    </div>
  );
};

export default Projects;
