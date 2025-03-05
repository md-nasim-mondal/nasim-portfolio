import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGithub,
    FaGit,
  } from "react-icons/fa";
  import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiReactquery,
    SiBootstrap,
    SiVercel,
    SiNetlify,
    SiFirebase,
    SiFigma,
  } from "react-icons/si";
  import {
    FiHeadphones,
    FiUsers,
    FiZap,
    FiFastForward,
    FiClock,
  } from "react-icons/fi";
  import { BiLogoVisualStudio } from "react-icons/bi";
  import { GrUserWorker } from "react-icons/gr";
  import Container from "@/components/Shared/Container";
  
  const Skills = () => {
    return (
      <section id='skills' className='bg-[#313741] text-white py-20'>
        <Container>
          <div className='container mx-auto'>
            <h2 className='text-3xl md:text-5xl font-bold mb-16 text-center'>
              <span className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent'>
                Professional Skills
              </span>
            </h2>
            <div>
              <div className='text-center'>
                <h3 className='text-2xl md:text-3xl font-bold mb-12 text-[#03CAB0]'>
                  <span className='border-b-2 rounded-2xl p-2'>
                    Technical Skills & Tools
                  </span>
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiMongodb className='mx-auto text-3xl mb-2 text-green-500' />
                    <h4 className='text-xl'>MongoDB</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiExpress className='mx-auto text-3xl mb-2 text-green-600' />
                    <h4 className='text-xl'>Express.js</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaNodeJs className='mx-auto text-3xl mb-2 text-green-400' />
                    <h4 className='text-xl'>Node.js</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiReactquery className='mx-auto text-3xl mb-2 text-gray-500' />
                    <h4 className='text-xl'>TanStack Query</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiFirebase className='mx-auto text-3xl mb-2 text-orange-500' />
                    <h4 className='text-xl'>Firebase Auth</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaReact className='mx-auto text-3xl mb-2 text-blue-500' />
                    <h4 className='text-xl'>React</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaJs className='mx-auto text-3xl mb-2 text-yellow-500' />
                    <h4 className='text-xl'>JavaScript</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiTailwindcss className='mx-auto text-3xl mb-2 text-teal-400' />
                    <h4 className='text-xl'>Tailwind CSS</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiBootstrap className='mx-auto text-3xl mb-2 text-purple-500' />
                    <h4 className='text-xl'>Bootstrap</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaCss3Alt className='mx-auto text-3xl mb-2 text-blue-600' />
                    <h4 className='text-xl'>CSS</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaHtml5 className='mx-auto text-3xl mb-2 text-orange-600' />
                    <h4 className='text-xl'>HTML</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <BiLogoVisualStudio className='mx-auto text-3xl mb-2 text-blue-500' />
                    <h4 className='text-xl'>VS Code</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaGit className='mx-auto text-3xl mb-2 text-orange-600' />
                    <h4 className='text-xl'>Git</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FaGithub className='mx-auto text-3xl mb-2 text-white' />
                    <h4 className='text-xl'>Github</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiFigma className='mx-auto text-3xl mb-2 text-red-500' />
                    <h4 className='text-xl'>Figma</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiVercel className='mx-auto text-3xl mb-2 text-black' />
                    <h4 className='text-xl'>Vercel</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <SiNetlify className='mx-auto text-3xl mb-2 text-cyan-500' />
                    <h4 className='text-xl'>Netlify</h4>
                  </div>
                </div>
              </div>
              <div className='text-center pt-8'>
                <h3 className='text-2xl md:text-3xl font-bold my-12 text-[#03CAB0]'>
                  <span className='border-b-2 rounded-2xl p-2'>Soft Skills</span>
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FiHeadphones className='mx-auto text-3xl mb-2 text-teal-500' />
                    <h4 className='text-xl'>Active Listening</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FiUsers className='mx-auto text-3xl mb-2 text-blue-500' />
                    <h4 className='text-xl'>Teamwork</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <GrUserWorker className='mx-auto text-3xl mb-2 text-green-500' />
                    <h4 className='text-xl'>Hard Working</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FiZap className='mx-auto text-3xl mb-2 text-teal-400' />
                    <h4 className='text-xl'>Adaptive</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FiFastForward className='mx-auto text-3xl mb-2 text-green-300' />
                    <h4 className='text-xl'>Quick Learner</h4>
                  </div>
                  <div className='bg-gray-800 p-4 rounded-lg'>
                    <FiClock className='mx-auto text-3xl mb-2 text-yellow-500' />
                    <h4 className='text-xl'>Time Management</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  };
  
  export default Skills;
  