import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import './App.css';
import instagramIcon from './instagram.svg';
import githubIcon from './github.svg';
import linkedinIcom from './linkedin.svg';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`content ${isSidebarOpen ? '' : 'content-shift'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarOpen ? '<<' : '>>'}
        </button>
        <Section id="home">
          
          <h1><span style={{color: "#4361EE"}}>Robert</span> Pendergrast</h1>
          <h2>Software Engineer, Roboticist, Space Enthusiast</h2>
          <h3>New York, New York · <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rlp2153@columbia.edu&su=Contact" style={ {color: '#4895EF', textDecoration: 'none'}} >rlp2153@columbia.edu</a></h3>
          <hr></hr>
        </Section>
        <hr />
        <Section id="about">
          <h1>About</h1>
          <hr></hr>
          <h3>I am a junior at Columbia University studying computer science, specializing in robotics, artificial intelligence, and low-level systems programming.
            I am involved in the Columbia Space Initiative both as an Operations Director and as the Software Team Lead for the CubeSat Team. I am passionate about space and robotics and intend on 
            pursuing a career in the astro-robotics industry. 

          </h3>
          <br></br>
          <h3>
            I also have experience various other fields including web development, game development and networking. I spend my free time away from work backpacking and hiking.
          </h3>
        </Section>
        <hr />
        <Section id="projects">
          <h1>Projects</h1>
          <hr></hr>
          <a href = "https://columbianewsservice.com/2023/04/27/columbia-universitys-first-student-organized-satellite-team-gets-nasa-funding/" className='Project-Title'>LIONESS Satellite</a>
          <h3>Lead software engineer for a team of ~20 students involved with the design and development of a 6U CubeSat. The satellite is purposed with taking long exposure images of low-redshift galaxies to study galactic formation. LIONESS (Line Imaging Orbiter for Nanosatellite-Enabled Spectrographic Surveys) is scheduled to launch by NASA in 2027. </h3>
          <a className='Project-Title'>HTTP Web Server</a>
          <h3>Designed and implemented a HTTP/1.0 webserver from scratch in C with the Sockets API. The server makes connections with a simultaneously running database server to query data based on client input. The data is then sent to the browser.</h3>
          <h3>Available Upon Request</h3>
          <a href = "https://web-dev-six-omega.vercel.app/" className='Project-Title'>MyNationalParks</a>
          <h3>Developed a web application with an interactive React.js frontend to allow national parks users to journal their adventures. Implemented backend services with Node.js and Express, including a RESTful API for handling CRUD operations.</h3>
          <a href = "https://github.com/RobertPendergrast/VideoGame" className='Project-Title'>Video Game Engine</a>
          <h3>Wrote a video game engine from scratch in Java using Swing graphics. No other outside libraries were used for the engine. It features a Perlin Noise terrain generation algorithm, object detection and collisions, and realistic movement physics.</h3>
          <a href = "https://scratch.mit.edu/users/AgentQuirt/projects/" className='Project-Title'>Online Game Developer</a>
          <h3>Developed over 30 games on the online coding editor Scratch. Amassed over 5000 followers with over 1 million people playing my games. Had over a dozen projects placed on the front page. Chosen to be a site curator.</h3>
        </Section>
        <hr/>
        <Section>
          <h1>Contact</h1>
          <div id = "contact">
          <hr></hr>
          <p>Get in touch with me!</p>
          
          <a href='https://www.instagram.com/robbiependergrast/'><img  src = {instagramIcon}/></a>
          <a href = 'https://www.linkedin.com/in/robert-pendergrast/'><img src = {linkedinIcom}/></a>
          <a href = 'https://github.com/RobertPendergrast'><img src = {githubIcon} /></a>
          <br></br>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rlp2153@columbia.edu&su=Contact" style={ {fontSize:'24px', color: '#4895EF', textDecoration: 'none'}} >rlp2153@columbia.edu</a>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;


