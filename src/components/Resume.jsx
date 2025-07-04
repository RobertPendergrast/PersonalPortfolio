// Inside your Resume.jsx file
import React from 'react';
import './Resume.css';
import resumePDF from '../Resume.pdf'; // place your PDF in src/assets

const Resume = () => {
  return (
    <section className="resume">
      <h2 className = "section-title">Resume</h2>

      {/* Embed the PDF */}
      <div className="pdf-container">
        <iframe
          src={resumePDF}
          title="Resume PDF"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      </div>

      {/* Download link (optional) */}
      <a href={resumePDF} download className="resume-download">
        Download PDF
      </a>
    </section>
  );
};

export default Resume;
