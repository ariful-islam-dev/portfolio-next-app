import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://ariful-islam66.web.app/static/media/02.c9ffda0f.png"
        alt="User avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Ariful</span> Islam
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full ">
        Fullstack Web Developer
      </p>
      <a
        href=""
        download="name"
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="my-5 py-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Barisal, Bangladesh</span>
        </div>
        <p className="my-2">ariful4082@gmail.com</p>
        <p className="my-2">+8801863934966</p>
      </div>
      {/* Email Button */}
      <button
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={() => window.open(`mailto: ariful4082@gmail.com`)}
      >
        Email Me
      </button>
      <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
