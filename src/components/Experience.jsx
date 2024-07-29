import React from 'react';
import Section from '../components/Section';

const Experience = () => {

  const work = [
    {
      id: 1,
      company: "Carnegie Mellon University - REUSE",
      role: "REU intern - Visualising Formal Specifications",
      date: "May 2024 - present",
      description: "Researched visualization of formal models. Conducted interviews of formal methods users. Contributed to Penlloy, a diagram translation tool that translated models and instances of Alloy, a formal modeling language, into visualizations in Penrose, a plaintext notation diagramming tool developed at CMU.",
    },
  ];

  const education = [
    {
      id: 1,
      school: "Georgia Institute of Technology",
      degree: "Bachelors of Science in Computer Science, People-Theory",
      date: "August 2021 - December 2024",
      gpa: "3.79",

    }

  ]



  return (
    <section id='experience'>

    <Section
    title='Experience' 
    subtitle='My work thus far'
    >
      <div className='min-h-fit flex flex-col justify-start items-center p-0 text-center gap-8 lg:gap-14 grid-cols-1'>
        {work.map(({id, company, role, date, description}) => (
          <div key={id}>
            <h2 className='text-3xl py-2 font-medium'>{company}</h2>
            <h3 className='text-2xl py-2 font-normal'>{role}</h3>
            <h4 className='text-xl py-2 font-light'>{date}</h4>
            <p className='max-w-xl font-normal text-left py-2'>{description}</p>
          </div>
        ))}
      </div>

    </Section>

    <Section
     title='Education' 
     subtitle=''
     >
       <div className='min-h-fit flex flex-col justify-start items-center p-0 text-center gap-8 lg:gap-14 grid-cols-1'>
         {education.map(({id, school, degree, date, gpa}) => (
           <div key={id}>
             <h2 className='text-3xl py-2 font-medium'>{school}</h2>
             <h3 className='text-2xl py-2 font-normal'>{degree}</h3>
             <h4 className='text-xl py-2 font-light'>{date} - GPA: {gpa}</h4>
           </div>
         ))}
       </div>





    </Section>


    </section>
    
  )
}

export default Experience