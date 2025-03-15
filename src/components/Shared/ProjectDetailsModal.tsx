"use client";
import Modal from "./UI/Modal";
import useAppStore from "@/store/useAppStore";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id?: string;
  title?: string;
  description?: string;
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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Project: ${project?.title}`}>
      <div className='space-y-5 text-stone-600'>

        {/* Live Link */}
        {project?.link && (
          <div className='text-center'>
            <a
              href={project.link}
              className='inline-flex items-center text-lg font-medium text-blue-600 hover:underline'
              target='_blank'
              rel='noopener noreferrer'>
              🔗 Live Project <FaExternalLinkAlt className='ml-2' />
            </a>
          </div>
        )}

        {/* Description */}
        <div>
          <h4 className='text-xl font-semibold text-stone-700'>Description:</h4>
          <p className='text-stone-500 leading-relaxed'>{project?.description}</p>
        </div>

        {/* Features */}
        {project?.features?.length ? (
          <div>
            <h4 className='text-xl font-semibold text-stone-700'>Features:</h4>
            <ul className='text-stone-500 list-disc list-inside space-y-2'>
              {project.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Technologies */}
        {project?.technologies?.length ? (
          <div>
            <h4 className='text-xl font-semibold text-stone-700'>Technology Used:</h4>
            <ul className='text-stone-500 list-disc list-inside space-y-2'>
              {project.technologies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* GitHub Links */}
        <div className='flex flex-wrap gap-3 justify-center mt-6'>
          {project?.clientRepo && (
            <a
              href={project.clientRepo}
              className='inline-flex items-center bg-gradient-to-r from-[#24DFDE] to-[#1FB382] text-white px-4 py-2 rounded-lg transition hover:scale-105 shadow-md'
              target='_blank'
              rel='noopener noreferrer'>
              Client Repo <FaGithub className='ml-2' />
            </a>
          )}
          {project?.serverRepo && (
            <a
              href={project.serverRepo}
              className='inline-flex items-center bg-gradient-to-r from-[#1FB382] to-[#24DFDE] text-white px-4 py-2 rounded-lg transition hover:scale-105 shadow-md'
              target='_blank'
              rel='noopener noreferrer'>
              Server Repo <FaGithub className='ml-2' />
            </a>
          )}
        </div>

      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
