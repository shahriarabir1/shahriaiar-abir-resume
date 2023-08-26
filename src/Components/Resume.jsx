import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="relative w-full h-screen">
      <img
        src="back.jpg"
        className=" absolute w-full h-screen object-cover cover-left top-[20] "
      />
      <img src="Ab.png" className="absolute" />
      <div className="flex justify-center ">
        <h1
          className="absolute top-40  font-bold text-white text-2xl text-6xl"
          style={{
            fontFamily: "'Lugrasimo', 'cursive'",
            textShadow: "1px 2px 3px black",
          }}
        >
          Shahriar Abir
        </h1>
      </div>
    </div>
  );
};

export default Resume;
