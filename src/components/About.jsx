import React from 'react';
import profile from '../assets/website.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className='bg-cream pt-4 dark:bg-gray-900' id='about'>
      <div className='bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-lg max-w-5xl mx-auto px-8 py-6'>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Left Column */}
          <div className='md:w-1/3 flex flex-col items-center space-y-4'>
            <img src={profile} alt='avatar' className='rounded-full w-48 h-48 object-cover'/>
            <h2 className='text-3xl font-medium'>Avinash Palliyil</h2>
            <p className='text-gray-600 dark:text-white'>Researcher & Software Developer</p>
            
            {/* Social Links */}
            <div className='flex space-x-4'>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" 
                 className='text-2xl text-gray-800 dark:text-white hover:text-purple-600 transition-colors'>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
                 className='text-2xl text-gray-800 dark:text-white hover:text-purple-600 transition-colors'>
                <FaLinkedin />
              </a>
            </div>

            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-indigo-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <a href='/ResumeAvinashP.pdf' download={true} target='_blank'>Resume ⤓</a>
            </button>
          </div>

          {/* Right Column */}
          <div className='md:w-2/3 space-y-4'>
            <p className='text-gray-800 dark:text-white'>
              Hi! My name is Avinash Palliyil. I am a fourth-year CS major at the Georgia Institute of Technology with threads in People and Theory. 
              My passion lies in the areas of human-computer interaction and visualization.
            </p>
            
            <p className='text-gray-800 dark:text-white'>
              Since writing my first lines of code in 2021, I have looked for ways to combine my love for technology and design by working on different personal projects. 
              I have also sought out research opportunities to work on novel solutions to various software engineering challenges.
            </p>

            <p className='text-gray-800 dark:text-white'>
              Most recently, I have been working as an <a href='https://www.cmu.edu/scs/s3d/reuse/people/index.html' className='text-blue-600 hover:underline' rel='noreferrer' target='_blank'>REU intern</a> at Carnegie Mellon University researching visualization techniques for formal methods.
            </p>

            <p className='text-gray-800 dark:text-white'>
              In my free time, you can find me playing tennis, listening to music, or doing crossword puzzles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;