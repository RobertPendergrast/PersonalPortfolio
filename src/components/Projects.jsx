// components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'FPGA N-Body Computational Accelerator',
      description:
        'Developed a hardware-accelerated simulation of the N-body problem using FPGA technology, achieving significant performance improvements over traditional CPU-based simulations.',

      tech: ['SystemVerilog', 'FPGA', 'Linux', 'Device Drivers'],
      link: 'https://github.com/RobertPendergrast/NBody',
    },
    {
      title: 'Panspermia Simulation',
      description:
        'Wrote a simulation of panspermia, the hypothesis that life can be distributed throughout the universe via space dust, meteoroids, asteroids, comets, planetoids, or potentially by spacecraft in the form of unintended contamination by microorganisms.',

      tech: ['Python', 'Simulation', 'Poisson Process', 'Astrobiology'],
      link: 'https://github.com/RobertPendergrast/Panspermia',
    },
    {
      title: 'Satellite Imagery Classification & Segmentation',
      description:
        'Developed a custom deep learning model to classify and segment satellite imagery, achieving 99% accuracy on a test dataset. Utilized Pytorch for model training and evaluation.',
      tech: ['Python', 'Pytorch', 'Deep Learning', 'Satellite Imagery'],
      link: 'https://github.com/RobertPendergrast/Deforestation',
    },
    {
      title: 'LIONESS Satellite',
      description:
        'Flight software for a 6U CubeSat launching with NASA in 2027. Focused on imaging galactic redshift data using custom onboard control systems.',
      tech: ['C++', 'F Prime', 'Communications Protocols', 'Python'],
      link: 'https://columbianewsservice.com/2023/04/27/columbia-universitys-first-student-organized-satellite-team-gets-nasa-funding/',
    },
    {
      title: 'HTTP Server From Scratch',
      description:
        'Built a multithreaded HTTP/1.0 web server in C using the sockets API, complete with custom routing and database connectivity.',
      tech: ['C', 'POSIX Sockets', 'Multithreading'],
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
