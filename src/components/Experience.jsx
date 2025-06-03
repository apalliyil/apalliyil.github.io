import React from 'react';
//import { FaCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "CS 3001: Computing, Society, and Professionalism - Undergraduate/Graduate Teaching Assistant",
      company: "Georgia Tech School of Computing Instruction",
      location: "Atlanta, GA",
      date: "January 2025 - present",
      year: 2025,
      description: "I am serving as a Teaching Assistant for CS 3001, an ethics course at Georgia Tech. I lead weekly discussion seminars on selected ethics readings and grade and provide feedback to students on a variety of different writing assignments, including a final term paper."
    },
    {
      id: 2,
      role: "Research Intern - Visualising Formal Specifications",
      company: "Carnegie Mellon University - REUSE",
      location: "Pittsburgh, PA",
      date: "May 2024 - May 2025",
      year: 2024,
      description: (
        <>
          <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
            I researched visualization of formal models with Dr. Joshua Sunshine, Dr. Eunsuk Kang, and Yiliang Liang. My research was comprised of two approaches.
            I first conducted interviews of formal methods users to understand how they use visualizations in their work. Based on these findings, I contributed to <a href="https://github.com/penrose/penrose" target="_blank" rel="noopener noreferrer" className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 underline'>Penlloy</a>, a diagram translation tool that translated models and instances of Alloy, a formal modeling language, into visualizations in Penrose, a plaintext notation diagramming tool developed at Carnegie Mellon University.
          </p>
          <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
            We wrote about our work in a paper that was accepted into <a href="https://2025.plateau-workshop.org/" target="_blank" rel="noopener noreferrer" className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 underline'>PLATEAU 2025</a>, an annual workshop on the intersection of HCI and PL. I also wrote an extended abstract of my work during the summer for the <a href="https://conf.researchr.org/track/icse-2025/icse-2025-SRC" target="_blank" rel="noopener noreferrer" className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 underline'>IEEE International Conference on Software Engineering (ICSE) 2025 Student Research Competition (SRC)</a>. My paper was accepted into the SRC, and I presented my work at the conference in Ottawa, Canada, where I placed 2nd in the undergraduate track 🎉.
          </p>
          <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
            You can check out our <a href="/PLATEAUPaper.pdf" target="_blank" rel="noopener noreferrer" className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 underline'>PLATEAU paper</a> and my <a href="/SRCExtendedAbstract.pdf" target="_blank" rel="noopener noreferrer" className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 underline'>SRC extended abstract</a> and <a href="/SRCPoster.pdf" target="_blank" rel="noopener noreferrer" className='text-blue-500 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 underline'>SRC poster</a>.
          </p>
        </>
      ),
    },
    {
      id: 3,
      role: "CS 1301: Introduction to Computing Undergraduate Teaching Assistant",
      company: "Georgia Tech School of Computing Instruction",
      location: "Atlanta, GA",
      date: "May 2023 - December 2024",
      year: 2023,
      description: "I served as a Teaching Assistant for CS 1301, an introductory computer science course at Georgia Tech. I led recitations and created practice problems to help students grasp various programming concepts. I also managed exam-related tasks, including curating practice materials and grading, ensuring student success."
    },
    
  ];

  const education = [
    {
      id: 1,
      school: "Georgia Institute of Technology",
      degree: "Masters of Science in Computer Science (Visual Analytics)",
      date: "August 2025 - May 2027",
      gpa: "4.00"
    },
    {
      id: 2,
      school: "Georgia Institute of Technology",
      degree: "Bachelors of Science in Computer Science (People-Theory), Highest Honors",
      date: "August 2021 - May 2025",
      gpa: "3.78"
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
            <div key={edu.id} className='mb-5'>
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