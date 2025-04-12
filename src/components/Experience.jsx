import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Byteloom",
    period: "2024 - Present",
    description: `SOFTWARE ENGINEER ASSOCIATE | BYTELOOM 
  •	Worked on task-based assignments involving front-end changes, feature creation, and code enhancements using React and Ant Design.
  •	Designed custom themes for visualization charts using Apache Chart, improving the product's usability and aesthetics.
  •	Converted SQL data to CSV format for seamless integration with the visualization platform.
  •	Built a loan default prediction model in Python with 87% accuracy on a 25,000-entry dataset, identifying future defaulters.
  •	Conducted Exploratory Data Analysis (EDA) to extract actionable insights from customer data, supporting data-driven decision-making.
`,
  },
  // {
  //   company: "Second Company",
  //   period: "2020 - Present",
  //   description: "Description of your experience in this company.",
  // },
  // {
  //   company: "Third Company",
  //   period: "2020 - Present",
  //   description: "Description of your experience in this company.",
  // },
  // {
  //   company: "Fourth Company",
  //   period: "2020 - Present",
  //   description: "Description of your experience in this company.",
  // },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience) => (
          <Reveal key={experience.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
