"use client";
import Modal from "./UI/Modal";
import useAppStore from "@/store/useAppStore";
import { FaGithub } from "react-icons/fa";

interface Project {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  clientRepo?: string;
  serverRepo?: string;
  link?: string;
  features?: string[];
  technologies?: string[];
}

interface ProjectDetailsModalProps {
  project?: Project;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project }) => {
  const { isOpen, setIsOpen } = useAppStore();

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`Details of ${project?.title}`}>
      <div>
        <h4 className='text-lg font-semibold'>Description: </h4>
        <p className='text-stone-500 mb-4'>{project?.description}</p>
        <h4 className='text-lg font-semibold'>Features: </h4>
        <ul className='text-stone-500 mb-4 list-disc list-inside'>
          {project?.features?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h4 className='text-lg font-semibold'>Technology Used: </h4>
        <ul className='text-stone-500 mb-4 list-disc list-inside'>
          {project?.technologies?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {/* GitHub Links */}
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
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
