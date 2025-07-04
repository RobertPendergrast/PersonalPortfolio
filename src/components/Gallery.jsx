// components/Gallery.js
import React from 'react';
import './Gallery.css';

const images = [
  { src: '/images/cubesat.jpg', alt: 'CubeSat Mockup' },
  { src: '/images/labwork.jpg', alt: 'Lab Development' },
  { src: '/images/hiking.jpg', alt: 'Backpacking Adventure' },
  { src: '/images/conference.jpg', alt: 'Presenting at Conference' },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
