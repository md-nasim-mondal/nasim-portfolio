import Container from "@/components/Shared/Container";
import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaPlug,
  FaCreditCard,
} from "react-icons/fa";

const services = [
  {
    title: "Front-end",
    description:
      "I offer expert frontend development services, creating responsive, user-friendly websites and web applications using modern technologies like HTML, CSS, JavaScript, and frameworks like React.",
    icon: FaLaptopCode,
  },
  {
    title: "Backend",
    description:
      "I offer professional backend development services, building robust, scalable server-side applications using technologies like Node.js and Express.js to ensure seamless performance and security.",
    icon: FaServer,
  },
  {
    title: "Database",
    description:
      "I offer professional MongoDB database services, specializing in designing, implementing, and managing scalable, high-performance NoSQL databases to ensure efficient data storage, retrieval, and security for your applications.",
    icon: FaDatabase,
  },
  {
    title: "Responsive Design",
    description:
      "Creating visually appealing and user-friendly designs for all devices, ensuring your website or application looks great on desktops, tablets, and smartphones.",
    icon: FaMobileAlt,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrating third-party APIs to enhance functionality and provide additional features in your web applications or services.",
    icon: FaPlug,
  },
  {
    title: "Payment Integration",
    description:
      "Implementing secure and efficient payment gateways for seamless transactions, ensuring your customers can make payments easily and securely.",
    icon: FaCreditCard,
  },
];

const Services = () => {
  return (
    <section id='services' className='bg-[#22252C] text-white py-20'>
      <Container>
        <div className='container mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold mb-16 text-center'>
            <span className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent'>
              SERVICES
            </span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services?.map((service, index) => (
              <div
                key={index}
                className='p-8 bg-gray-800 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all duration-300 animate-fade-in-up'
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className='mb-4 text-5xl text-[#24DFDE] flex justify-center'>
                  {React.createElement(service?.icon)}
                </div>
                <h3 className='text-2xl font-semibold mb-4'>
                  {service?.title}
                </h3>
                <p className='mb-4'>{service?.description}</p>
                {/* <button
                  onClick={() => alert(`Learn more about ${service.title}`)}
                  className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] text-white px-4 py-2 rounded-lg hover:from-[#1a8c6e] hover:to-[#1fb3a1] transition-all duration-300'>
                  Learn More
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
