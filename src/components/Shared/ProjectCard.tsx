"use client";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";

interface Project {
  id?: string;
  title?: string;
  image?: string;
  clientRepo?: string;
  serverRepo?: string;
  link?: string;
}

interface ProjectCardProps {
  project?: Project;
  setProjectId: (id?: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, setProjectId }) => {
  //   const { isOpen, setIsOpen } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleViewDetails = (id?: string) => {
    setProjectId(id);
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white text-stone-500 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300'>
      <Image
        src={project?.image || ""}
        alt={project?.title || ""}
        className='rounded-t-lg h-72 w-full'
      />
      <div className='p-6'>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-stone-500 text-center'>
          {project?.title}
        </h3>

        <div className='flex gap-[4%] flex-wrap justify-between my-6'>
          <a
            href={project?.clientRepo}
            className='inline-flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white py-2 px-4 rounded transition duration-300 uppercase w-[48%]'
            target='_blank'
            rel='noopener noreferrer'>
            Client <FaGithub className='ml-2' />
          </a>
          <a
            href={project?.serverRepo}
            className='inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-green-700 to-green-900 text-white py-2 px-4 rounded transition duration-300 uppercase w-[48%]'
            target='_blank'
            rel='noopener noreferrer'>
            Server <FaGithub className='ml-2' />
          </a>
        </div>

        <div className='flex gap-[4%] flex-wrap justify-between'>
          <a
            href={project?.link}
            className='flex-1 text-center bg-gradient-to-r from-[#24DFDE] to-[#1FB382] text-white rounded-lg px-4 py-2 shadow-lg hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-500 flex items-center justify-center space-x-2 transition-colors duration-300 uppercase'>
            <span>Preview</span>
            <FontAwesomeIcon icon={faEye} className='text-lg' />
          </a>
          <button
            onClick={() => handleViewDetails(project?.id)}
            className='text-center bg-gradient-to-r from-[#1FB382] to-[#24DFDE] text-white rounded-lg px-4 py-2 shadow-lg hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-500 flex items-center justify-center space-x-2 transition-colors duration-300 uppercase'>
            <span>View Details</span>
            <FontAwesomeIcon icon={faEye} className='text-lg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
