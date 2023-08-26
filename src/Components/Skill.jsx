import React from "react";

function Skill() {
  return (
    <div id="skill" className="flex flex-col items-center w-full h-screen">
      <h2 className="text-2xl sm:text-4xl font-bold  text-indigo-900 mt-7 mb-5">
        Skills
      </h2>
      <ol className="flex flex-col  relative border-l border-stone-200 ml-6">
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className="  text-xl  font-bold ml-4">
              Frontend Devlopment
            </span>
            <span className="text-md ml-2">
              ---HTML , CSS , JavaScript , Tailwind , Bootstrap 5 , React , Vite
            </span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">Backend Devlopment</span>
            <span className="text-md ml-2">---Node Js , Express Js</span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">
              Database Development
            </span>
            <span className="text-md ml-2">---SQL , NoSQL</span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">Databases</span>
            <span className="text-md ml-2">---MySQL , MongoDB</span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">Another Languages</span>
            <span className="text-md ml-2">---Python , C++ , R</span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">AI Development</span>
            <span className="text-md ml-2">
              ---Machine Learning , Deep Learning
            </span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">Others</span>
            <span className="text-md ml-2">---Git & GitHUB</span>
          </p>
        </li>
        <li className="mb-10 ml-2 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p>
            <span className=" text-xl font-bold ml-4">Soft Skills</span>
            <span className="text-md ml-2">
              ---Leadership , Communication , Problem Solving , Analytical
            </span>
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Skill;
