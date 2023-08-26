import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center h-screen">
      <h1 className="font-bold text-center text-2xl sm:text-4xl text-indigo-900 mb-8">
        Contact
      </h1>
      <form
        method="POST"
        action="https://getform.io/f/4efa666e-d3d4-4903-95ec-3e313ccc83dd"
      >
        <div className="grid sm:grid-cols-2 grid-gap-4">
          <div className="flex flex-col mr-7 mb-7">
            <label className="uppercase text-md font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2  rounded-md p-3 "
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-md font-bold" htmlFor="phone">
              Phone No
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border-2 rounded-md p-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-md font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border-2  rounded-md flex p-3 w-full"
            />
          </div>
          <div></div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-md font-bold" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border-2  rounded-md flex p-3"
            />
          </div>
          <div></div>
          <div className="flex flex-col py-2">
            <label htmlFor="msg" className="uppercase text-md font-bold">
              Message
            </label>
            <textarea
              className="border-2  rounded-md flex p-3"
              name="message"
              rows={10}
            ></textarea>
          </div>
          <div></div>
          <button className="text-white bg-indigo-900 w-full rounded-md h-10 hover:scale-110 ease-in duration-200">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
