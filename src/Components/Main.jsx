import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        src="back.jpg"
        className="w-full h-screen object-cover cover-left top-[20] "
      />

      <div className="absolute top-0 left-0 w-full h-screen bg-indigo-900/60 ">
        <div className=" flex flex-col  justify-center items-center  h-screen w-full ">
          <h1
            className="text-4xl text-pink-500  font-bold shadow-lg shadow-black mb-5 p-8 rounded-md "
            style={{ textShadow: "1px 4px 5px black" }}
          >
            I'm Shahriar Abir
          </h1>
          <h2
            className="text-2xl text-lime-400 font-bold shadow-lg shadow-black p-8 rounded-md"
            style={{ textShadow: "1px 4px 5px black" }}
          >
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full-Stack Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Machine Learning Expert",
                2000,
                "Application Programmer",
                2000,
                "Database Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex flex-row mr-[22px] mt-17 ">
            <a href="https://www.facebook.com/shahriar.abir.jmjsa.1210?mibextid=ZbWKwL">
              <FaFacebookF
                className="cursor-pointer m-4 text-white hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a href="https://twitter.com/Shahriar_Abir_">
              <FaTwitter
                className="cursor-pointer  m-4 text-white hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a href="https://www.linkedin.com/in/shahriar-abir-995a791b7">
              <FaLinkedinIn
                className="cursor-pointer  m-4 text-white hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a href="https://github.com/shahriarabir1">
              <FaGithub
                className="cursor-pointer  m-4 text-white hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
