"use client";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/Shared/Container";

// Define TypeScript interfaces
interface FormData {
  email: string;
  senderName: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  error?: {
    message: string;
  };
}

interface ContactForm extends HTMLFormElement {
  email: HTMLInputElement;
  nameInput: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const sectionStyle = {
  //   background: "#22252C",
  //   color: "white",
  //   padding: "20px 0",
  // };

  const handleSubmit = async (e: React.FormEvent<ContactForm>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData: FormData = {
      email: e.currentTarget.email.value,
      senderName: e.currentTarget.nameInput.value, // Changed from 'name' to 'nameInput'
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const JSONdata = JSON.stringify(formData);
    const endpoint = `${
      process.env.NEXT_PUBLIC_BASE_URL as string
    }/api/contact/message/send`; // Backend API endpoint

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData: ApiResponse = await response.json();

      if (response.status === 200) {
        toast.success("Successfully Message Sent!!");
        setEmailSubmitted(true);
      } else {
        toast.error(resData.error?.message || "An error occurred");
        setError(resData.error?.message || "An error occurred");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("An error occurred while sending the message");
      setError("An error occurred while sending the message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='py-20 text-white bg-[#22252C]'>
      <Container>
        <h2 className='text-3xl md:text-5xl font-bold mb-12 text-center'>
          <span className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent'>
            Contact With Me
          </span>
        </h2>
        <div className='container mx-auto flex flex-col md:flex-row gap-16 px-3 md:px-0 justify-between items-start py-12'>
          <div className='md:w-1/2 w-full'>
            <h5 className='text-2xl md:text-4xl font-bold text-[#03CAB0] my-4'>
              Get In Touch
            </h5>
            <p className='text-[#FFF] mb-8'>
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className='flex gap-2'>
              <a
                href='https://github.com/md-nasim-mondal'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#03CAB0] hover:bg-[#03CAB0] hover:text-white rounded-full flex items-center justify-center w-12 h-12 p-2 border-2 border-[#03CAB0]'>
                <FaGithub className='text-3xl rounded-full' />
              </a>
              <a
                href='https://www.linkedin.com/in/md-nasim-mondal'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#03CAB0] hover:bg-[#03CAB0] hover:text-white rounded-full flex items-center justify-center w-12 h-12 p-2 border-2 border-[#03CAB0]'>
                <FaLinkedin className='text-3xl rounded-full' />
              </a>
            </div>
          </div>
          <div className='md:w-1/2 w-full'>
            {emailSubmitted ? (
              <p className='bg-gradient-to-r from-[#1FB382] to-[#24DFDE] bg-clip-text text-transparent text-2xl mt-12'>
                Successfully Sent Email. Please Check Your Mail!!
              </p>
            ) : (
              <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                <div className='mb-6 w-full'>
                  <label
                    htmlFor='email'
                    className='text-[#03CAB0] block mb-2 text-sm font-medium'>
                    Your email
                  </label>
                  <input
                    name='email'
                    type='email'
                    id='email'
                    required
                    className='bg-[#18191E] border border-[#03CAB0] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='jacob@gmail.com'
                  />
                </div>
                <div className='mb-6 w-full'>
                  <label
                    htmlFor='name'
                    className='text-[#03CAB0] block mb-2 text-sm font-medium'>
                    Your Name
                  </label>
                  <input
                    name='nameInput' // Changed from 'name' to 'nameInput'
                    type='text'
                    id='name'
                    required
                    className='bg-[#18191E] border border-[#03CAB0] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Write Your Name'
                  />
                </div>
                <div className='mb-6 w-full'>
                  <label
                    htmlFor='subject'
                    className='text-[#03CAB0] block text-sm mb-2 font-medium'>
                    Subject
                  </label>
                  <input
                    name='subject'
                    type='text'
                    id='subject'
                    required
                    className='bg-[#18191E] border border-[#03CAB0] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Please enter your Subject'
                  />
                </div>
                <div className='mb-6 w-full'>
                  <label
                    htmlFor='message'
                    className='text-[#03CAB0] block text-sm mb-2 font-medium'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    required
                    className='bg-[#18191E] border border-[#03CAB0] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='mt md:mt-6 lg:mt-8 w-52 text-center bg-gradient-to-r from-[#24DFDE] to-[#1FB382] text-white rounded-lg px-4 py-2 shadow-lg hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-500 flex items-center justify-center space-x-2 transition-colors duration-300'>
                  <FontAwesomeIcon icon={faMessage} className='text-lg' />
                  <span>
                    {isLoading ? (
                      <TbFidgetSpinner className='animate-spin m-auto' />
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </button>
                {error && (
                  <p className='text-red-500 text-sm mt-2'>Error: {error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
