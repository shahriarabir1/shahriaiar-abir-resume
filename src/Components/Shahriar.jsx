import React from "react";
import { GrProjects } from "react-icons/gr";
import { BiDiamond } from "react-icons/bi";
import { LiaAwardSolid } from "react-icons/lia";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
const Shahriar = () => {
  const [nav, setNav] = useState(false);
  const handlleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handlleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-white"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center  items-center  z-20 md:hidden">
          <a
            onClick={handlleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handlleNav}
            href="#skill"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BiDiamond size={20} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handlleNav}
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handlleNav}
            href="award"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <LiaAwardSolid size={20} />
            <span className="pl-4">Education & Certifications</span>
          </a>
          
          <a
            onClick={handlleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handlleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <a
            onClick={handlleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ml-7">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#skill"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <BiDiamond size={20} />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#award"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <LiaAwardSolid size={20} />
          </a>
          
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shahriar;
