// components/Contact.js
import React from 'react';
import './Contact.css';
import githubIcon from '../github.svg';
import linkedinIcon from '../linkedin.svg';
import instagramIcon from '../instagram.svg';

function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">Let’s Connect</h2>
      <p className="contact-tagline">Shoot me a message or explore my work:</p>
      <div className="icon-row">
        <a href="https://github.com/RobertPendergrast" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/robert-pendergrast/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/robbiependergrast/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
      <p className="email-link">
        <a href="mailto:rlp2153@columbia.edu">rlp2153@columbia.edu</a>
      </p>
    </section>
  );
}

export default Contact;
