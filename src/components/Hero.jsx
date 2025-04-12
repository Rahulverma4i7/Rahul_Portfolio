import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPython,
  SiPandas,
} from "react-icons/si";
import {
  AiOutlineGithub,
  //   AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiNodejsSmall, DiReact } from "react-icons/di";
import { motion } from "framer-motion";
const DiPython = SiPython;
const DiPandas = SiPandas;

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Data Science",
              1000,
              "Full Stack Developer",
              1000,
              "Freelancer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">RAHUL VERMA</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate data scientist & fullstack developer with over 1
            years of experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            {/* <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button> */}

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Rahulverma4i7"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/rahul-verma-4213b9231"
              >
                <AiOutlineLinkedin />
              </motion.a>

              {/* <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineInstagram />
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col md:flex-row text-4xl md:text-7xl px-6 md:px-12 w-full justify-center items-center py-12 md:py-24 gap-4 md:gap-0"
      >
        <p className="text-gray-200 mr-0 md:mr-6 mb-4 md:mb-0">My Tech Stack</p>
        <div className="flex flex-wrap justify-center">
          <DiPython className="text-blue-400 mx-2" />
          <DiPandas className="text-red-600 mx-2" />
          <SiNumpy className="text-blue-900 mx-2" />
          <SiScikitlearn className="text-orange-500 mx-2" />
          <SiTensorflow className="text-orange-400 mx-2" />
          <DiReact className="text-blue-500 mx-2" />
          <DiNodejsSmall className="text-green-500 mx-2" />
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
