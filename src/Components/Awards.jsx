import React from "react";

const Awards = () => {
  return (
    <div
      id="award"
      className="flex flex-col  justify-center items-center h-screen  "
    >
      <div className="">
        <h1 className="font-bold text-2xl sm:text-4xl text-indigo-900 mb-5">
          Educations
        </h1>
        <ol className="flex flex-col  relative border-l border-stone-200 ml-6">
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">Undergraduate</span>
              <span className="text-md ml-2">
                ---Chittagong University of Engineering and Technology ||{" "}
                <span className="text-sm ml-2">From 2020 To 2024 || </span>
                <span className="text-md ml-2">GPA:3.68 out of 4.00</span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">Higher Secondary</span>
              <span className="text-md ml-2">
                ---Govt.Edward College,Pabna ||{" "}
                <span className="text-sm ml-2">From 2017 to 2019 || </span>
                <span className="text-md ml-2">GPA:5.00 out of 5.00</span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">Secondary School</span>
              <span className="text-md ml-2">
                ---Pabna Zilla School, Pabna ||{" "}
                <span className="text-sm ml-2">From 2009 To 2017 || </span>
                <span className="text-md ml-2">GPA:5.00 out of 5.00</span>
              </span>
            </p>
          </li>
        </ol>
      </div>
      {/* Awards */}

      <div className=" flex flex-col items-even">
        <h1 className="font-bold text-2xl sm:text-4xl mb-5 text-indigo-900">
          Awards or Certifcations
        </h1>
        <ol className="flex flex-col  relative border-l border-stone-200 ml-6">
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">JavaScript</span>
              <span className="text-md ml-2">
                ---Udemy ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcation in JavaScript{" "}
                </span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">SQL</span>
              <span className="text-md ml-2">
                ---HackerRank ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcation in SQL ||{" "}
                </span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">Python</span>
              <span className="text-md ml-2">
                ---Udemy ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcation in Python ||{" "}
                </span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">
                Mastery SQL and Database
              </span>
              <span className="text-md ml-2">
                ---Udemy ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcation in Database Development{" "}
                </span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">Machine Learning</span>
              <span className="text-md ml-2">
                ---Kaggle ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcation in Machine Learning ||{" "}
                </span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">
                Pandas And Matplotlib
              </span>
              <span className="text-md ml-2">
                ---Kaggle ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcation in Pandas and Matplotlib ||{" "}
                </span>
              </span>
            </p>
          </li>
          <li className="mb-10 ml-2 ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
            <p>
              <span className=" text-xl font-bold ml-4">Soft Skill</span>
              <span className="text-md ml-2">
                ---HULT Prize ||{" "}
                <span className="text-sm ml-2">
                  Get Certifcations in Soft Skill ||{" "}
                </span>
              </span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Awards;
