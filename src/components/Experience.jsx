import React from 'react';
//import { FaCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Research Intern - Visualising Formal Specifications",
      company: "Carnegie Mellon University - REUSE",
      location: "Pittsburgh, PA",
      date: "May 2024 - present",
      year: 2024,
      description: "This summer, I researched visualization of formal models. My research was comprised of two main approaches. I conducted interviews of formal methods users to understand how they use visualizations in their work. Based on these findings, I contributed to Penlloy, a diagram translation tool that translated models and instances of Alloy, a formal modeling language, into visualizations in Penrose, a plaintext notation diagramming tool developed at Carnegie Mellon University.",
      link: {
        text: "Poster summarizing my work",
        url: "/REUSE Poster.pdf"
      }
    },
    {
      id: 2,
      role: "CS 1301: Introduction to Computing Undergraduate Teaching Assistant",
      company: "Georgia Tech School of Computing Instruction",
      location: "Atlanta, GA",
      date: "May 2023 - December 2024",
      year: 2023,
      description: "I served as a Teaching Assistant for CS 1301, an introductory computer science course at Georgia Tech. I led recitations and created practice problems to help students grasp various programming concepts. I also managed exam-related tasks, including curating practice materials and grading, ensuring student success."
    }
  ];

  const education = [
    {
      id: 1,
      school: "Georgia Institute of Technology",
      degree: "Bachelors of Science in Computer Science, People-Theory",
      date: "August 2021 - December 2024",
      gpa: "3.77"
    }
  ];

  return (
    <section className='bg-cream dark:bg-gray-900 py-8' id='experience'>
      <div className='max-w-5xl mx-auto px-8'>
        <h2 className='text-4xl font-bold text-blue-500 dark:text-blue-400 mb-8'>Experience</h2>
        
        <div className='relative mb-16'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600'></div>

          {/* Experience tiles */}
          <div className='space-y-12'>
            {experiences.map((exp) => (
              <div key={exp.id} className='relative'>
                {/* Year circle */}
                <div className='absolute left-8 -translate-x-1/2 flex items-center justify-center'>
                  <div className='w-12 h-12 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center'>
                    <span className='text-sm font-medium text-white'>{exp.year}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className='ml-20 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg dark:shadow-white/10'>
                  <div className='flex justify-between items-start mb-4'>
                    <div>
                      <h3 className='text-xl font-semibold dark:text-white'>{exp.role}</h3>
                      <h4 className='text-lg text-gray-600 dark:text-gray-300'>{exp.company}</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>{exp.location} • {exp.date}</p>
                    </div>
                  </div>

                  {exp.description && (
                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>{exp.description}</p>
                  )}

                  {exp.bulletPoints && (
                    <ul className='list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-2 ml-4'>
                      {exp.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {exp.link && (
                    <a 
                      href={exp.link.url} 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm underline'
                    >
                      {exp.link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <h2 className='text-4xl font-bold text-blue-500 dark:text-blue-400 mb-8'>Education</h2>
        <div className='bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-white/10 p-6'>
          {education.map((edu) => (
            <div key={edu.id}>
              <h3 className='text-xl font-semibold dark:text-white'>{edu.school}</h3>
              <p className='text-lg text-gray-600 dark:text-gray-300'>{edu.degree}</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>{edu.date}</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;