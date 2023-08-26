import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative rounded-xl flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 group hover:bg-gradient-to-r from-gray-200 to-indigo-900">
      <img src={img} className=" group-hover:opacity-10 rounded-xl " />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-center font-bold tracking-wider text-white">
          {title}
        </h3>
        <a href="https://github.com/shahriarabir1" className="">
          <p className="text-center bg-white text-indigo-900 mt-5 rounded-lg text-lg font-bold cursor-pointer hover:scale-110">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
