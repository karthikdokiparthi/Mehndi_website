import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaStar } from 'react-icons/fa';
import './Hero.css';

import main1 from '../assets/main1.jpg';
import main2 from '../assets/main2.jpg';


const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className="hero-pattern"></div>
            <div className="henna-overlay"></div>

            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="title-container">
                            <h1 className="hero-title">
                                Exquisite <span className="hero-highlight">Mehndi Art</span> for Every Occasion
                            </h1>
                            <div className="title-decoration"></div>
                        </div>

                        <p className="hero-description">
                            Professional mehndi designs by Vijju, bringing elegance and tradition to your special moments.</p>

                        <div className="hero-features">
                            <div className="feature">
                                <FaStar className="feature-icon" />
                                <span>Intricate Designs</span>
                            </div>
                            <div className="feature">
                                <FaStar className="feature-icon" />
                                <span>Traditional Patterns</span>
                            </div>
                            <div className="feature">
                                <FaStar className="feature-icon" />
                                <span>Natural Ingredients</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <a href="tel:+919491688449" className="btn btn-primary">
                                <FaPhoneAlt className="icon" /> Call Now
                            </a>
                            <a href="https://wa.me/919491688449" className="btn btn-whatsapp">
                                <FaWhatsapp className="icon" /> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="hero-images">
                        <div className="main-image-frame">
                            <div className="henna-corner tl"></div>
                            <div className="henna-corner tr"></div>
                            <div className="henna-corner bl"></div>
                            <div className="henna-corner br"></div>
                            <img src={main1} alt="Intricate Mehndi Designs" className="main-image" />
                            <div className="image-text">Intricate Designs</div>
                        </div>

                        <div className="secondary-image-frame">
                            <img src={main2} alt="Traditional Mehndi Patterns" />
                            <div className="image-text">Traditional Patterns</div>
                        </div>

                        <div className="floating-element e1"></div>
                        <div className="floating-element e2"></div>
                        <div className="floating-element e3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;