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
    <div className='flex justify-center items-center text-center py-8 lg:py-16 w-full'>
        {Social.map(({id, link, icon}) => (
            <a 
            href={link} 
            key={id}
            target='_blank'
            rel='noopener noreferrer' 
            className='mx-4 cursor-pointer duration-300 hover:text-blue-500 text-3xl'
            
            >
                {icon}
            </a>
        ))}
    </div>
  )
}

export default Footer

//flex-col justify-start items-center