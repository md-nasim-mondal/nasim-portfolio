"use client"
import Container from "@/components/Shared/Container";
import { motion } from "framer-motion";
import { FaUniversity, FaCode } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";

const Educations: React.FC = () => {
  const yearColor = "text-[#24DFDE]";
  const institutionColor = "text-[#03CAB0]";

  return (
    <section id="education" className="py-20 bg-[#313741] text-white">
      <Container>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent">
              EDUCATION
            </span>
          </h2>
        </motion.div>
        <div>
          {/* University */}
          <motion.div className="mb-20 lg:mb-12 flex flex-wrap-reverse items-center justify-center lg:justify-between gap-8 lg:gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className={`mb-2 text-xl md:text-3xl text-center lg:text-start ${yearColor}`}>
                May 2022 - Present
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{ boxShadow: "4px 4px 8px #03CAB0" }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 p-10 flex justify-center items-center gap-8">
                <div className="text-7xl text-[#1FB382]">
                  <FaUniversity />
                </div>
                <div>
                  <p className={`font-semibold text-lg ${institutionColor}`}>
                    Bachelor of Science in Computer Science and Engineering
                  </p>
                  <p className={`text-[#24DFDE] text-xl`}>Uttara University</p>
                </div>
              </h6>
            </motion.div>
          </motion.div>

          {/* Course */}
          <motion.div className="mb-20 lg:mb-12 flex flex-wrap-reverse items-center justify-center lg:justify-between gap-8 lg:gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className={`mb-2 text-xl md:text-3xl text-center lg:text-start ${yearColor}`}>
                Dec 2023 - June 2024
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{ boxShadow: "4px 4px 8px #03CAB0" }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 p-10 flex justify-center items-center gap-8">
                <div className="text-7xl text-[#1FB382]">
                  <FaCode />
                </div>
                <div>
                  <p className={`font-semibold text-lg ${institutionColor}`}>
                    Professional Web Development Course (MERN Stack)
                  </p>
                  <p className={`text-[#24DFDE] text-xl`}>Programming Hero</p>
                </div>
              </h6>
            </motion.div>
          </motion.div>

          {/* College */}
          <motion.div className="mb-20 lg:mb-12 flex flex-wrap-reverse items-center justify-center lg:justify-between gap-8 lg:gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className={`mb-2 text-xl md:text-3xl text-center lg:text-start ${yearColor}`}>
                June 2017 - May 2019
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{ boxShadow: "4px 4px 8px #03CAB0" }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 p-10 flex items-center gap-8">
                <div className="text-7xl text-[#1FB382]">
                  <LuSchool />
                </div>
                <div>
                  <p className={`font-semibold text-lg ${institutionColor}`}>
                    Higher Secondary Certificate
                  </p>
                  <p className={`text-[#24DFDE] text-xl`}>Gazipur City College</p>
                </div>
              </h6>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Educations;
