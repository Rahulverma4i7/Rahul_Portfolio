// import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Rahul Verma</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/Rahulverma4i7">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/rahul-verma-4213b9231">
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2025 Rahul Verma</p>
    </div>
  );
};

export default Footer;
