import React from 'react';
import {FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  const Social = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/avinash-palliyil",
      icon: <FaLinkedin/>
    },
    {
      id: 2,
      link: "https://github.com/apalliyil",
      icon: <FaGithub/>
    },
  ];

  return (
    <footer className='bg-cream dark:bg-gray-900 py-8 lg:py-16'>
      <div className='container mx-auto flex justify-center'>
        <div className='flex gap-8'>
          {Social.map(({id, link, icon}) => (
            <a 
              href={link} 
              key={id}
              target='_blank'
              rel='noopener noreferrer' 
              className='text-3xl text-gray-800 dark:text-white hover:text-blue-500 transition-colors'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;