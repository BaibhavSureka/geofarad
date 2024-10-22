import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <h2 className="about-section-title">About Us</h2>
      <div className="about-section">
        <div className="images-section">
          <div className="image-row">
            <img src="./assets/rectangle-2928-2.svg" alt="Image 1" className="image-1" />
            <img src="./assets/rectangle-2818.svg" alt="Image 2" className="image-2" />
          </div>
          <div className="image-row">
            <img src="./assets/rectangle-2819.svg" alt="Image 3" className="image-3" />
            <img src="./assets/rectangle-2817.svg" alt="Image 4" className="image-4" />
          </div>
        </div>
        <div className="text-section">
          <h1 className="headline">We’re Creating Only Exceptional Quality Capacitors</h1>
          <p className="description">
            V.J. Capacitors Pvt Ltd, operating under the esteemed brand name GEOFARAD, specializes in manufacturing a diverse range of AC capacitors. Our advanced production facility in Noida, Uttar Pradesh, features state-of-the-art, fully automated machinery, ensuring stringent quality control. With a team of seasoned marketing professionals and engineers well-versed in the latest technology, we deliver top-notch products known for their reliability and efficiency.
          </p>
          <div className="founder-section">
            <img src="./assets/ellipse-1166.svg" alt="Founder" className="founder-image" />
            <div className="founder-text">
              <h2>Vineet Gupta</h2>
              <p>Founder</p>
            </div>
          </div>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
