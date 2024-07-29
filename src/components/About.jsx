import React from 'react';
import profile from '../assets/website.jpg';


const About = () => {

    




  return (
    <section className='min-h-fit flex flex-col justify-start items-center p-5 text-center' id='about'>
        <img src={profile} alt='avatar' className='rounded-full w-1/5 h-1/5 p-5'/>
        <h2 className='text-5xl font-medium upperase '> ✌ Hi, I'm Avinash</h2>
        <h3 className='text-3xl py-3'>Researcher & Software Developer</h3>
        <p className='max-w-xl font-normal text-left py-3'>
        Hi! My name is Avinash Palliyil. I am a fourth-year CS major at the Georgia Institute of Technology with threads in People and Theory. 
        My passion lies in the areas of human-computer interaction and visualization. 
        </p>
        <p className='max-w-xl font-normal text-left py-3'>
            Since writing my first lines of code in 2021, I have looked for ways to combine my love for technology and design by working on different personal projects. 
            I have also sought out research opportunities to work on novel solutions to various software engineering challenges.

        </p>

        <p className='max-w-xl font-normal text-left py-3'>
        Most recently, I have been working as an REU intern at Carnegie Mellon University researching visualization techniques for formal methods. 
        </p>

        <p className='max-w-xl font-normal text-left py-3'>
        In my free time, you can find me playing tennis, listening to music, or doing crossword puzzles. 
        </p>

        
        {/*
        <div>
            <img src={headshot} alt='headshot' className='w-60 h-60 md:w-72 md:h-72'/>
        </div>

         */}


         
        
         <button type="button"  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <a href='/ResumeAvinashP.pdf' download={true}>Resume ⤓</a>
         </button>





    </section>
  )
}

export default About