import React from 'react';
import cIcon from '../assets/skill-icons/C.svg';
import javaIcon from '../assets/skill-icons/Java.svg';
import jsIcon from '../assets/skill-icons/JavaScript.svg';
import pythonIcon from '../assets/skill-icons/Python.svg';
import tsIcon from '../assets/skill-icons/TypeScript.svg';
import reactIcon from '../assets/skill-icons/React.svg';
import nodeIcon from '../assets/skill-icons/Node.js.svg';
import pandasIcon from '../assets/skill-icons/Pandas.svg';
import numpyIcon from '../assets/skill-icons/NumPy.svg';
import gitIcon from '../assets/skill-icons/Git.svg';
import dockerIcon from '../assets/skill-icons/Docker.svg';
import htmlIcon from '../assets/skill-icons/HTML5.svg';
import cssIcon from '../assets/skill-icons/CSS3.svg';
import markdownIcon from '../assets/skill-icons/Markdown.svg';
import latexIcon from '../assets/skill-icons/LaTeX.svg';
import mysqlIcon from '../assets/skill-icons/MySQL.svg';
import jiraIcon from '../assets/skill-icons/Jira.svg';
import matlabIcon from '../assets/skill-icons/MATLAB.svg';
import figmaIcon from '../assets/skill-icons/Figma.svg';
import tableauIcon from '../assets/skill-icons/tableau.svg';
import npmIcon from '../assets/skill-icons/NPM.svg';
import expressIcon from '../assets/skill-icons/Express.svg';
import matplotlibIcon from '../assets/skill-icons/Matplotlib.svg';
import tailwindIcon from '../assets/skill-icons/Tailwind CSS.svg';
import scikitIcon from '../assets/skill-icons/scikit-learn.svg';

const Skills = () => {
  const languages = [
    {
      id: 1,
      name: "C",
      src: cIcon
    },
    {
      id: 2,
      name: "Java",
      src: javaIcon
    },
    {
      id: 3,
      name: "JavaScript",
      src: jsIcon
    },
    {
      id: 4,
      name: "Python",
      src: pythonIcon
    },
    {
      id: 5,
      name: "TypeScript",
      src: tsIcon
    }
  ];

  const frameworksAndLibraries = [
    {
      id: 1,
      name: "React",
      src: reactIcon
    },
    {
      id: 2,
      name: "Node",
      src: nodeIcon
    },
    {
      id: 3,
      name: "Pandas",
      src: pandasIcon
    },
    {
      id: 4,
      name: "NumPy",
      src: numpyIcon
    },
    {
      id: 5,
      name: "Express",
      src: expressIcon
    },
    {
      id: 6,
      name: "Matplotlib",
      src: matplotlibIcon
    },
    {
      id: 7,
      name: "Tailwind CSS",
      src: tailwindIcon
    },
    {
      id: 8,
      name: "scikit-learn",
      src: scikitIcon
    }
  ];

  const tools = [
    {
      id: 1,
      name: "Git",
      src: gitIcon
    },
    {
      id: 2,
      name: "Docker",
      src: dockerIcon
    },
    {
      id: 3,
      name: "HTML",
      src: htmlIcon
    },
    {
      id: 4,
      name: "CSS",
      src: cssIcon
    },
    {
      id: 5,
      name: "Markdown",
      src: markdownIcon
    },
    {
      id: 6,
      name: "LaTeX",
      src: latexIcon
    },
    {
      id: 7,
      name: "MySQL",
      src: mysqlIcon
    },
    {
      id: 8,
      name: "Jira",
      src: jiraIcon
    },
    {
      id: 9,
      name: "MATLAB",
      src: matlabIcon
    },
    {
      id: 10,
      name: "Figma",
      src: figmaIcon
    },
    {
      id: 11,
      name: "Tableau",
      src: tableauIcon
    },
    {
      id: 12,
      name: "NPM",
      src: npmIcon
    }
  ];

  return (
    <section className='bg-cream dark:bg-gray-900 py-8' id='skills'>
      <div className='max-w-5xl mx-auto px-8'>
        <h2 className='text-4xl font-bold text-blue-500 mb-8 dark:text-blue-400'>Skills</h2>
        
        <div className='grid md:grid-cols-3 gap-6'>
          {/* Languages */}
          <div className='bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-white/10 p-6 border-t-4 border-blue-500'>
            <h3 className='text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4'>Languages</h3>
            <div className='grid grid-cols-2 gap-4'>
              {languages.map(({id, name, src}) => (
                <div key={id} className='flex flex-col items-center'>
                  <img 
                    src={src} 
                    alt={name} 
                    className='w-12 h-12 object-contain mb-2'
                  />
                  <span className='text-sm text-gray-600 dark:text-gray-300'>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className='bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-white/10 p-6 border-t-4 border-gray-500'>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4'>Frameworks & Libraries</h3>
            <div className='grid grid-cols-2 gap-4'>
              {frameworksAndLibraries.map(({id, name, src}) => (
                <div key={id} className='flex flex-col items-center'>
                  <img 
                    src={src} 
                    alt={name} 
                    className='w-12 h-12 object-contain mb-2'
                  />
                  <span className='text-sm text-gray-600 dark:text-gray-300'>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className='bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-white/10 p-6 border-t-4 border-orange-500'>
            <h3 className='text-xl font-semibold text-orange-800 dark:text-orange-300 mb-4'>Tools</h3>
            <div className='grid grid-cols-2 gap-4'>
              {tools.map(({id, name, src}) => (
                <div key={id} className='flex flex-col items-center'>
                  <img 
                    src={src} 
                    alt={name} 
                    className='w-12 h-12 object-contain mb-2'
                  />
                  <span className='text-sm text-gray-600 dark:text-gray-300'>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;