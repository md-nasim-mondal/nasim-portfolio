"use client";
import { useState } from "react";
import Modal from "./UI/Modal";

interface Project {
  title?: string;
}

interface DetailsModalProps {
  project?: Project;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ project }) => {
//   const { isOpen, setIsOpen } = useAuth();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Details of ${project?.title}`}>
      <div>
        <h1 className="text-xl text-center my-6">Coming Soon...</h1>
      </div>
    </Modal>
  );
};

export default DetailsModal;
