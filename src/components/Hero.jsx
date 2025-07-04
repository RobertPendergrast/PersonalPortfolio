// components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>
        <span className="highlight">Robert Pendergrast</span>
      </h1>
      <h2>Flight Software · Embedded Systems · AI/ML</h2>
      <p>
        Engineer & builder at the intersection of autonomy, robotics, and aerospace.
      </p>
    </section>
  );
}

export default Hero;
