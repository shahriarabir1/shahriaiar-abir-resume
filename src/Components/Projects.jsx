import React from "react";
import ProjectItem from "./ProjectItem";
import er from "/ER Diagram.png";
import rel from "/Relational Diagram.png";
import gal from "/3d.png";
import cart from "/cart.png";
import dia from "/Diabetis pred.jpg";
import to from "/todo.png";
const Projects = () => {
  return (
    <div
      id="project"
      className="max-w-[1080px] m-auto md:pl-20 p-4 py-16 h-full mb-40"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-indigo-900 mb-6">
        Projects
      </h1>
      <p className="text-md mt-5 text-center ml-5">
        These projects are totally done by me for any clients or personal uses.
        No rights to copy them for any pupose.The source codes and images are
        provide to show my progresses.All items are fully economic.No way to
        copy anyone.If anyone needs for pracitce or taking idea then must be
        contact with me.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 mt-6 ml-5 mb-25">
        <ProjectItem img={er} title="ER Diagram" />
        <ProjectItem img={rel} title="Relational Database" />
        <ProjectItem img={gal} title="Galaxy 3D" />
        <ProjectItem img={cart} title="Cart-Functionality" />
        <ProjectItem img={dia} title="Diabetes Model" />
        <ProjectItem img={to} title="Todo App" />
      </div>
    </div>
  );
};

export default Projects;
