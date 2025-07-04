// components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      org: 'Astranis Space Technologies',
      description: 'Writing firmware, testing software, and building the next generation of satellite communications systems.',
    },
    {
      title: 'Research Assistant',
      org: 'Columbia University',
      description: 'Researching in the field of flight software and embedded systems. Focusing on developing a bpf runtime for small satellites for efficient command sequencing.',
    },
    {
      title: 'Lead Engineer',
      org: 'Columbia Space Initiative',
      description: 'Leading a team of 40 students to design and build a 6U CubeSat for NASA. Responsible for software architecture, hardware integration, and mission planning.',
    },
    {
      title: 'Lead Flight Software Engineer',
      org: 'Columbia Space Initiative',
      description: 'Leading a team of software engineers to develop flight-ready software for a 6U CubeSat launching with NASA in 2027. Responsible for onboard control logic, communications, and hardware interfacing.',
    },
    {
      title: 'Operations Director',
      org: 'Columbia Space Initiative',
      description: 'Managed organizational structure, internal communications, and strategy across 200+ students in 8 technical teams. Helped secure funding and mission approvals.',
    },
    {
      title: 'Systems Engineer',
      org: 'Space Dynamics Laboratory',
      description: 'Worked on the design and implementation of satellite systems, focusing on radio communication budgets and power management for small satellites.'
      },

    
  ];

  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <h4>{exp.org}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
