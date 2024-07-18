import React from 'react';
import Section from '../components/Section';
import spotify from '../assets/spotify.png';
import penrose from '../assets/penrose.png';
import { FaGithub } from 'react-icons/fa';


const Projects = () => {

    const portfolio = [

        {
            id: 1,
            description: 'Penrose: Web-based diagram generator',
            github: "https://github.com/penrose/penrose",
            image: penrose,

        },
        {
            id: 2,
            description: 'Mesh: Spotify Playlist Curator',
            github: "https://github.com/apalliyil/Hacklytics2022",
            image: spotify,
            
        },


    ];

    //test
    console.log(portfolio)


  return (
    <Section 
    title='Projects' 
    subtitle='These are the projects I have worked on!'
    >

        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
            {portfolio.map(({id, description, github, image}) => (
                <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                    <img src={image} alt={description} className='w-2/3 p-10'/>
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-3'>
                        <h2 className='max-w-xl font-medium text-left py-3'>{description}</h2>
                        <a href={github} target='_blank' rel="noopener noreferrer" className='text-2xl cursor-pointer duration-150 hover:scale-110'>
                            <FaGithub/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </Section>
  );
};

export default Projects;