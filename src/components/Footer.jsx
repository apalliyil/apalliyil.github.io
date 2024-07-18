import React from 'react';
import {FaLinkedin,FaGithub} from "react-icons/fa";


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
    <div className='flex justify-evenly items-center text-center py-8 lg:py-16 text-3xl w-full md:w-1/3'>
        {Social.map(({id, link, icon}) => (
            <a 
            href={link} 
            key={id}
            target='_blank'
            rel='noopener noreferrer' 
            className='cursor-pointer duration-300 hover:text-blue-500'
            
            >
                {icon}
            </a>
        ))}
    </div>
  )
}

export default Footer

//flex-col justify-start items-center