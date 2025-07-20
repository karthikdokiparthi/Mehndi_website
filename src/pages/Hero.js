import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaStar } from 'react-icons/fa';
import './Hero.css';

import main1 from '../assets/main1.jpg';
import main2 from '../assets/main2.jpg';

const hennaPattern = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%238B4513' d='M50 5c10 0 20 5 25 15 5 10 10 20 5 30-5 10-10 20-20 25-10 5-20 10-30 5-10-5-15-15-20-25-5-10-5-20 0-30C25 10 35 5 45 5c5 0 10 0 15 0zm-20 20c5-5 15-5 20 0 5 5 10 10 5 15-5 5-10 10-15 15-5 5-10 10-15 5-5-5-5-15 0-20 5-5 5-10 0-10zm35 10c5-5 10 0 15 5 5 5 5 10 0 15-5 5-10 10-15 5-5-5-5-10 0-15 5-5 5-10 0-5z'/%3E%3Cpath fill='%238B4513' d='M30 40c0-5 5-10 10-10 5 0 10 5 10 10 0 5-5 10-10 10-5 0-10-5-10-10zm30-5c0-5 5-5 10-5 5 0 5 5 5 10 0 5 0 10-5 10-5 0-10-5-10-10 0-5 0-5 0-5z'/%3E%3C/svg%3E";

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