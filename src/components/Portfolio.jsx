// import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "#1 Loan Default Prediction",
    description:
      "Machine learning model for predicting loans that can default ",
    links: {
      site: "#",
      github: "https://github.com/Rahulverma4i7/Loan_default_prediction",
    },
  },
  {
    img: project2,
    title: "#2 Foocus ",
    description:
      "A fullstack application built with React.js , tailwindCss , Framer , Node.js and PostgreSQL ",
    links: {
      site: "#",
      github: "https://github.com/Rahulverma4i7/Focus-",
    },
  },
  {
    img: project4,
    title: "#3 Cinematic Odyssey in Personalized Recommendation",
    description: "A movie recommendation system with streamlit and python.",
    links: {
      site: "#",
      github:
        "https://github.com/Rahulverma4i7/A-Cinematic-Odyssey-in-Personalized-Recommendations",
    },
  },
  {
    img: project5,
    title: "#4 React Admin Dashboard ",
    description: "A admin dashboard with material ui and react.js.",
    links: {
      site: "#",
      github: "http://github.com/Rahulverma4i7/False_message_detection",
    },
  },
  {
    img: project6,
    title: "#5 False Message Detection",
    description: "A machine learning model to detect false message .",
    links: {
      site: "#",
      github: "https://github.com/Rahulverma4i7/False_message_detection",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {/* <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a> */}
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
