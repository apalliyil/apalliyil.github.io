import React from 'react';
//import Section from '../components/Section';
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Projects = () => {
    const portfolio = [
        {
            id: 1,
            title: 'My Personal Site',
            icon: 'logo.svg',
            description: 'My personal portfolio site, showcasing my work and interests',
            skills: [
                { name: 'JavaScript', category: 'language' },
                { name: 'React', category: 'framework' },
                { name: 'Node', category: 'framework' },
                { name: 'Tailwind CSS', category: 'framework' },
                { name: 'HTML', category: 'tool' },
                { name: 'CSS', category: 'tool' }
            ],
            link: "https://apalliyil.github.io/"
        },
        {
            id: 2,
            title: 'Penlloy',
            icon: 'logo.svg',
            description: 'A web-based visualizer for models generated in the Alloy specification language',
            skills: [
                { name: 'TypeScript', category: 'language' },
                { name: 'Java', category: 'language' },
                { name: 'React', category: 'framework' }
            ],
            link: "https://github.com/penrose/penrose"
        },
        {
            id: 3,
            title: 'Racing Game',
            icon: 'logo.svg',
            description: 'An interactive video game on a Nintendo GameBoy Advanced emulator.',
            skills: [
                { name: 'C', category: 'language' },
                { name: 'mGBA', category: 'tool' }
            ],
            link: "placeholder"
        },
        {
            id: 4,
            title: 'Wordle',
            icon: 'logo.svg',
            description: 'A Wordle clone built in Java.',
            skills: [
                { name: 'Java', category: 'language' },
                { name: 'JavaFX', category: 'framework' },
                { name: 'Swing', category: 'framework' }
            ],
            link: "placeholder"
        },
        {
            id: 5,
            title: 'Mesh: Spotify Playlist Curator',
            icon: 'logo.svg',
            description: 'A Spotify playlist curator that creates playlists based on shared user playlist similarity.',
            skills: [
                { name: 'Python', category: 'language' },
                { name: 'Deepnote', category: 'tool' }
            ],
            link: "https://github.com/apalliyil/Hacklytics2022"
        }
    ];

    const getSkillColor = (category) => {
        switch(category) {
            case 'language':
                return 'bg-blue-100 text-blue-800';
            case 'framework':
                return 'bg-gray-100 text-gray-800';
            case 'tool':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <section className='bg-cream dark:bg-gray-900 py-8' id='projects'>
            <div className='max-w-5xl mx-auto px-8'>
                <h2 className='text-4xl font-bold text-blue-500 dark:text-blue-400 mb-8'>Personal Projects</h2>
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {portfolio.map(({id, title, icon, description, skills, link}) => (
                        <div key={id} className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg dark:shadow-white/10 hover:shadow-xl dark:hover:shadow-white/20 transition-shadow relative'>
                            {/* Project Icon & Title */}
                            <div className='flex items-center gap-3 mb-4'>
                                <img 
                                    src={logo} 
                                    alt={`${title} icon`} 
                                    className='w-8 h-8 object-contain'
                                />
                                <h3 className='text-xl font-semibold dark:text-white'>{title}</h3>
                            </div>

                            {/* Description */}
                            <p className='text-gray-600 dark:text-gray-300 mb-4 text-sm'>
                                {description}
                            </p>

                            {/* Skills */}
                            <div className='flex flex-wrap gap-2 mb-8'>
                                {skills.map((skill, index) => (
                                    <span 
                                        key={index} 
                                        className={`text-xs px-3 py-1 rounded-full ${getSkillColor(skill.category)}`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub Link */}
                            <a 
                                href={link} 
                                target='_blank' 
                                rel="noopener noreferrer" 
                                className='absolute bottom-6 right-6 text-xl text-gray-600 hover:text-blue-600 transition-colors'
                            >
                                <FaGithub />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;