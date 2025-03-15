"use client";
import Container from "@/components/Shared/Container";
import img1 from "@/../public/assets/images/img1.png";
import img2 from "@/../public/assets/images/img2.png";
import img3 from "@/../public/assets/images/img3.png";
import { useState } from "react";
import ProjectItem from "@/components/Shared/ProjectItem";
import ProjectDetailsModal from "@/components/Shared/ProjectDetailsModal";
const CompletedProjects = () => {
  const [projectId, setProjectId] = useState(0);
  const projects = [
    {
      id: 1,
      title: "PetLoversHub",
      shortDescription: "A Simple Pet Adoption Platform",
      description:
        "PetLoversHub is pet adopt related Website.This platform aims to create a user-friendly interface for individuals to search for, connect with, and adopt pets in need of loving homes. Built using the MERN stack, PetLoversHub strives to make pet adoption as seamless and efficient as possible.",
      link: "https://pet-lovers-hub.netlify.app",
      clientRepo: "https://github.com/md-nasim-mondal/petLoversHub-client",
      serverRepo: "https://github.com/md-nasim-mondal/petLoversHub-server",
      features: [
        "Pet Listings: Browse and search through various pet categories, with detailed pet profiles.",
        "	Adoption Requests: Submit adoption requests with relevant information, enabling a smooth adoption process.",
        "Donation Campaigns: Create, view, and manage donation campaigns to support pets in need.",
      ],
      technologies: [
        "Frontend → HTML, CSS, Tailwind CSS, flowbite, React JS, React Router, React Hook Form, React Query, Firebase Authentication.",
        "Backend: Node JS, Express JS, MongoDB, Mongoose.",
        "Deployment → Frontend deployed on Netlify; Backend deployed on Vercel.",
        "Additional Libraries → React Tooltip, React-Quill, imgbb API, Stripe for payment processing, react-loading-skeleton, TanStack Table.",
      ],
      image: img1,
    },
    {
      id: 2,
      title: "StudySphere",
      shortDescription: "A Simple Assignment Related Platform",
      description:
        "StudySphere is a Assignment Related Platform, your all-encompassing platform for seamless assignment management and academic collaboration. At StudySphere, we provide a dynamic environment where users can effortlessly create, update, and delete assignments, tailored to specific user requirements.Our user-centric approach ensures flexibility and ease of use, allowing instructors to craft assignments with precision and students to engage actively.",
      link: "https://studysphere-1f8dd.web.app",
      clientRepo: "https://github.com/md-nasim-mondal/studySphere-client",
      serverRepo: "https://github.com/md-nasim-mondal/studySphere-server",
      features: [
        "Assignment Management: Easily create, update, and delete assignments.",
        "User-Specific Assignments: Assign tasks to specific users for targeted learning.",
        "Submission and Feedback: Submit answers and receive feedback from peers and instructors.",
      ],
      technologies: [
        "Frontend → HTML, CSS, Tailwind CSS, Daisy UI, React JS, Firebase and some React Packages (React Tooltip, react-simple-typewriter).",
        "Backend → Express JS, Node JS and Mongo Db.",
        "Deploy → Frontend client side deploy in Firebase and Backend server side deployed 	to Vercel.",
      ],
      image: img2,
    },
    {
      id: 3,
      title: "GlobeGuidanceHub",
      shortDescription: "A Simple Tours Guide Related Platform",
      description:
        "GlobeGuidanceHub is a tours guide related platform, your ultimate destination for tourism management. Explore diverse cultures, breathtaking landscapes, and unforgettable adventures. Plan your next trip with ease, discover hidden gems, and immerse yourself in enriching experiences. Start your journey today and unlock the wonders of the world with GlobeGuidanceHub.",
      link: "https://harvest-hub-client.web.app",
      clientRepo:
        "https://github.com/md-nasim-mondal/globeGuidanceHub-tourism-management-client",
      serverRepo:
        "https://github.com/md-nasim-mondal/globeGuidanceHub-tourism-management-server",
      features: [
        "User Authentication: Create accounts, log in, and save favorite properties with user authentication.",
        "User-friendly Interface: Effortlessly navigate our sleek, intuitive website design.",
        "Real-time Updates: Instantly receive updates on new listings, price changes, and property availability.",
      ],
      technologies: [
        "Frontend → HTML, CSS, Tailwind CSS, Daisy UI, React JS, Firebase and some React Packages (React Tooltip, react-simple-typewriter).",
        "Backend → Express JS, Node JS and MongoDb.",
        "Deploy → Frontend client side deploy in Firebase and Backend server side deploy to Vercel.",
      ],
      image: img3,
    },
  ];

  const project = projects.find((project) => project?.id === projectId) || {};

  return (
    <section
      id='projects'
      className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-opacity-40 py-24'>
      <Container>
        <div className='container mx-auto '>
          <h2 className='lg:text-5xl text-4xl font-extrabold text-white uppercase text-center mb-20'>
            Some Of My Completed Projects
          </h2>
          <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects?.map((project, index) => (
              <ProjectItem
                key={index}
                project={project}
                setProjectId={setProjectId}
              />
            ))}
          </div>
        </div>
      </Container>
      <ProjectDetailsModal project={project} />
    </section>
  );
};

export default CompletedProjects;
