"use client";
import useAppStore from "@/store/useAppStore";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: number;
  title?: string;
  shortDescription?: string;
  image?: string | StaticImageData;
  clientRepo?: string;
  serverRepo?: string;
  link?: string;
  features?: string[];
  technologies?: string[];
  type?: string;
}

interface ProjectCardProps {
  project: Project;
  setProjectId: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, setProjectId }) => {
  const { isOpen, setIsOpen } = useAppStore();

  const handleViewDetails = (id: number) => {
    setProjectId(id);
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white text-stone-500 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300'>
      {/* Project Image */}
      <div className='relative h-72 w-full overflow-hidden rounded-t-lg'>
        <Image
          src={project?.image || ""}
          alt={project?.title || "Project Image"}
          className='object-cover'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      {/* Project Details */}
      <div className='p-6 text-center'>
        <h3 className='text-xl md:text-2xl font-semibold mb-3 text-stone-600'>
          {project.title}
        </h3>

        {/* Short Description with Light Color */}
        <p className='text-stone-400 text-sm md:text-base mb-4'>
          {project?.shortDescription} {project?.type && `(${project?.type})`}
        </p>

        {/* Buttons Section */}
        <div className='flex flex-col sm:flex-row gap-3'>
          {/* Live Preview Button */}
          {project?.link && (
            <a
              href={project?.link}
              className='w-full sm:w-[48%] text-center bg-gradient-to-r from-[#24DFDE] to-[#1FB382] text-white rounded-lg px-4 py-2 shadow-md hover:opacity-90 flex items-center justify-center space-x-2 transition-all duration-300 uppercase'>
              <span>Preview</span>
              <FontAwesomeIcon icon={faEye} className='text-sm' />
            </a>
          )}

          {/* View Details Button */}
          <button
            onClick={() => handleViewDetails(project?.id)}
            className='w-full sm:w-[48%] text-center bg-gradient-to-r from-[#1FB382] to-[#24DFDE] text-white rounded-lg px-4 py-2 shadow-md hover:opacity-90 flex items-center justify-center space-x-2 transition-all duration-300 uppercase'>
            <span>View Details</span>
            <FontAwesomeIcon icon={faEye} className='text-sm' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
