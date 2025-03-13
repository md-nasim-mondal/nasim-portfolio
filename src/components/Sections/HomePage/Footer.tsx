import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-white py-6'>
      <div className='container mx-auto text-center'>
        <div className='mb-4'>
          {/* <a
            href='https://twitter.com'
            className='text-gray-400 hover:text-white mx-2'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </a> */}
          <a
            href='https://facebook.com/md.nasim.mondal.737'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mx-2'
            aria-label='Facebook'>
            <FontAwesomeIcon icon={faFacebookF} size='lg' />
          </a>
          <a
            href='https://linkedin.com/in/md-nasim-mondal'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mx-2'
            aria-label='LinkedIn'>
            <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
          </a>
          <a
            href='https://github.com/md-nasim-mondal'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mx-2'
            aria-label='GitHub'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        </div>
        <p className='text-gray-500'>
          &copy; 2024 Md. Nasim Mondal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;