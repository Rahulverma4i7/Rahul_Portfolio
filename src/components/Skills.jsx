import {
  DiPython,
  DiVisualstudio,
  DiReact,
  DiPostgresql,
  DiMsqlServer,
  DiNodejsSmall,
  DiMongodb,
  DiFirebase,
  DiGithubBadge,
} from "react-icons/di";

import Reveal from "./Reveal";

const skills = [
  {
    category: "Data Science & ML",
    technologies: [
      { name: "Python", icon: <DiPython className="text-blue-400" /> },
      { name: "Pandas", icon: <DiPython className="text-red-500" /> }, // Using Python as fallback
      { name: "NumPy", icon: <DiPython className="text-blue-600" /> }, // Using Python as fallback
      {
        name: "Scikit-learn",
        icon: <DiVisualstudio className="text-orange-500" />,
      },
      { name: "Matplotlib", icon: <DiMsqlServer className="text-blue-800" /> }, // Using SQL Server as fallback
      { name: "ARIMA", icon: <DiPostgresql className="text-purple-500" /> }, // Using PostgreSQL as fallback
      { name: "XGBoost", icon: <DiFirebase className="text-green-600" /> }, // Using Firebase as fallback
      { name: "TensorFlow", icon: <DiReact className="text-orange-400" /> }, // Using React as fallback
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a href="#" className="underline">
            there
          </a>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
