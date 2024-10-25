import React from 'react';
import './OurBrands.css';

const OurBrands = () => {
    return (
        <>
        <div className="info-section">
                <img src="src\assets\clients.png" alt="Clients Icon" className="icon" />
            <div className="info-box">
                <span className="text">1100+ Clients</span>
            </div>
            <img src="src\assets\india.png" alt="Locations Icon" className=" india_img icon" />
            <div className="info-box">
                
                <span className="text">3 Locations</span>
            </div>
        </div>

        <div className="our-brands-container">
            <h2 className="our-brands-title">
                <span className="stroke-line"></span> Our Brands
            </h2>
            <h3 className="brands-subtitle">We Leave A Lasting Impression</h3>
            <div className="brands-grid">
                <div className="brand-wrapper">
                    <div className="brand-card">
                        <img src="src/assets/brand1.png" alt="GE Geofarad" className="brand-logo" />
                        <div className="brand-number">01</div>
                    </div>
                    <p className="brand-description">“Performance Unlimited”</p>
                </div>
                
                <div className="brand-wrapper">
                    <div className="brand-card">
                        <img src="src/assets/brand2.png" alt="Marcon" className="brand-logo" />
                        <div className="brand-number">02</div>
                    </div>
                    <p className="brand-description">“Reliability Redefined”</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default OurBrands;
