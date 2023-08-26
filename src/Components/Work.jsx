import React from "react";

const Work = ({ year, title, type, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ml-6">
      <li className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap flex-row gap-4 items-center justify-start text-xs text-sm  md:text-lg">
          <span className="inline-block py-1 px-2 font-semibold bg-indigo-900 rounded-md text-white ">
            {year}
          </span>
          <span className="inline-block font-bold mr-4 ">{title}</span>
          <span className="inline-block font-bold text-indigo-500">{type}</span>
          <span className="inline-block font-semibold ml-4 ">{duration}</span>
        </p>
        <p className="text-justify mt-4">{details}</p>
      </li>
    </ol>
  );
};

export default Work;
