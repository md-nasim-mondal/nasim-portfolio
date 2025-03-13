"use client"
import Container from "@/components/Shared/Container";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="bg-[#22252C] pt-5 border-neutral-900 pb-14">
      <Container>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold my-16 text-center">
            <span className="bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
        </motion.div>
        <div>
          <motion.div className="mb-8 flex flex-wrap items-center md:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-xl md:text-2xl lg:text-3xl text-[#24DFDE] md:text-center lg:text-start">
                2024 (Fresher)
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{ boxShadow: "4px 4px 8px #03CAB0" }}
              className="w-full max-w-xl lg:w-3/4 bg-gray-800"
            >
              <h6 className="mb-2 p-10 flex justify-center items-center gap-8 ">
                <div>
                  <p className="font-semibold mb-2 text-xl md:text-2xl lg:text-3xl text-[#03CAB0]">
                    Passionate Learner
                  </p>
                  <p className="text-white">
                    I am a dedicated and enthusiastic Junior Frontend and Backend Developer with a strong passion for creating visually appealing and highly functional web applications using React.js. I have developed my skills through various projects that have prepared me to contribute effectively to a professional development team.
                  </p>
                </div>
              </h6>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WorkExperience;
