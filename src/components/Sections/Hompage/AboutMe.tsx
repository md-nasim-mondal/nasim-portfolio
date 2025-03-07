"use client"
import React from "react";
import profilePic from "@/../public/assets/images/md-nasim-mondal.jpg";
import Container from "@/components/Shared/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faCoffee,
  faCode,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import Image from "next/image";

const AboutMe: React.FC = () => {
  const handleResumeDownload = () => {
    const link =
      "https://drive.google.com/uc?export=download&id=1sTZr36o1IEOwKRYUAsDVpjXF4LMXtvEt";
    saveAs(link, "Resume of Md Nasim Mondal.pdf");
  };

  return (
    <section id='about' className='bg-[#22252C] text-white py-20'>
      <Container>
        <div className='container mx-auto flex flex-col lg:flex-row items-center md:items-start gap-6 md:gap-16'>
          {/* Profile Image */}
          <div className='w-full lg:w-1/3 flex flex-col justify-center lg:items-start items-center mb-8 md:mb-0 lg:mt-8'>
            <Image
              src={profilePic}
              alt='Md. Nasim Mondal'
              width={320}
              height={320}
              priority
              className='w-64 lg:w-72 xl:w-80 h-64 lg:h-72 xl:h-80 object-cover rounded-full p-6 lg:p-8 xl:p-10 border-4 border-[#03CAB0]'
            />
            <button
              onClick={handleResumeDownload}
              aria-label='Download Resume'
              className='mt-4 md:mt-6 lg:mt-8 w-52 text-center lg:ml-[15%] gradient-button rounded-lg px-4 py-2 shadow-lg flex items-center justify-center space-x-2'>
              <FontAwesomeIcon icon={faCloudDownloadAlt} className='text-lg' />
              <span>Download Resume</span>
            </button>
          </div>

          {/* About Me Details */}
          <div className='w-full lg:w-2/3'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center lg:text-start'>
              <span className='gradient-text'>
                ABOUT ME
              </span>
            </h2>
            <p className='text-lg leading-relaxed text-center lg:text-start'>
              Hello! I&apos;m Md. Nasim Mondal, a passionate MERN Stack Developer and a recent graduate in Computer Science from Uttara University. Although I am a fresher, I have hands-on experience in building dynamic web projects and a strong foundation in modern web technologies like HTML5, CSS3, JavaScript, and React JS. I am eager to contribute to innovative projects, learn from experienced professionals, and grow as a developer.
            </p>
            <p className='text-lg leading-relaxed text-center lg:text-start mt-4'>
              As a fresher, I am highly motivated to learn and adapt to new challenges. I believe in continuous improvement and am always looking for opportunities to enhance my skills and contribute to meaningful projects. During my academic journey, I completed several projects, including a full-stack e-commerce website and a task management application, which helped me gain practical experience in web development.
            </p>
            <p className='text-lg leading-relaxed text-center lg:text-start mt-4'>
              I am excited to start my professional journey and would love to connect with like-minded individuals and organizations. Feel free to reach out to me for any opportunities or collaborations!
            </p>
            <div className='flex justify-center lg:justify-start'>
              <div className='mt-8 space-y-1'>
                <p>
                  <span className='font-bold text-[#03CAB0]'>NAME:</span> Md.
                  Nasim Mondal
                </p>
                <p>
                  <span className='font-bold text-[#03CAB0]'>AGE:</span> 24
                </p>
                <p>
                  <span className='font-bold text-[#03CAB0]'>NATIONALITY:</span>{" "}
                  Bangladeshi
                </p>
                <p>
                  <span className='font-bold text-[#03CAB0]'>ADDRESS:</span>{" "}
                  Gazipur, Dhaka, Bangladesh
                </p>
                <p>
                  <span className='font-bold text-[#03CAB0]'>PHONE:</span> +880
                  1627206676
                </p>
                <p>
                  <span className='font-bold text-[#03CAB0]'>E-MAIL:</span>{" "}
                  mdnasimmondal622@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Interests */}
        <div className='container mx-auto mt-20 lg:ml-[4.5%]'>
          <h3 className='text-2xl md:text-3xl font-bold mb-4 text-center lg:text-start'>
            <span className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent'>
              MY INTERESTS
            </span>
          </h3>
          <div className='flex justify-center lg:justify-start space-x-8 mt-6'>
            <div className='text-center group'>
              <div className='w-16 h-16 border-2 rounded-full flex items-center justify-center mb-2 group-hover:bg-gradient-to-r from-[#1FB382] to-[#24DFDE] relative border-[#03CAB0] text-[#03CAB0] hover:text-white'>
                <FontAwesomeIcon
                  icon={faCode}
                  className='text-xl md:text-2xl xl:text-3xl'
                />
                <span className='absolute bottom-[-2.1rem] left-1/2 transform -translate-x-1/2 text-sm bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100'>
                  Programming
                </span>
              </div>
            </div>
            <div className='text-center group'>
              <div className='w-16 h-16 border-2 rounded-full flex items-center justify-center mb-2 group-hover:bg-gradient-to-r from-[#1FB382] to-[#24DFDE] relative border-[#03CAB0] text-[#03CAB0] hover:text-white'>
                <FontAwesomeIcon
                  icon={faPlane}
                  className='text-xl md:text-2xl xl:text-3xl'
                />
                <span className='absolute bottom-[-2.1rem] left-1/2 transform -translate-x-1/2 text-sm bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100'>
                  Traveling
                </span>
              </div>
            </div>
            <div className='text-center group'>
              <div className='w-16 h-16 border-2 rounded-full flex items-center justify-center mb-2 group-hover:bg-gradient-to-r from-[#1FB382] to-[#24DFDE] relative border-[#03CAB0] text-[#03CAB0] hover:text-white'>
                <FontAwesomeIcon
                  icon={faCoffee}
                  className='text-xl md:text-2xl xl:text-3xl'
                />
                <span className='absolute bottom-[-2.1rem] left-1/2 transform -translate-x-1/2 text-sm bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100'>
                  Coffee
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;