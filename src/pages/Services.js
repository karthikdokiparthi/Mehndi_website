import React from 'react';
import { FaHeart, FaBaby, FaRegGrinHearts, FaStar, FaMoon, FaGlassCheers } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const services = [
        { id: 1, title: "Bridal Mehndi", icon: <FaHeart />, description: "Exquisite bridal mehndi designs that tell your love story with intricate patterns and personalized motifs." },
        { id: 2, title: "Engagement Mehndi", icon: <FaRegGrinHearts />, description: "Beautiful designs for the beginning of your journey together, symbolizing love and commitment." },
        { id: 3, title: "Baby Shower Mehndi", icon: <FaBaby />, description: "Celebrate new beginnings with delicate patterns that honor motherhood and the miracle of life." },
        { id: 4, title: "Arabic Mehndi", icon: <FaMoon />, description: "Elegant floral patterns with bold designs that make a statement for any occasion." },
        { id: 5, title: "Traditional Mehndi", icon: <FaStar />, description: "Classic designs rooted in cultural heritage, preserving the timeless beauty of mehndi art." },
        { id: 6, title: "Party Mehndi", icon: <FaGlassCheers />, description: "Fun and trendy designs perfect for celebrations, festivals, and special gatherings." }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <div className="pattern-decoration top"></div>
                    <h2 className="section-title">Our Mehndi Services</h2>
                    <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-icon">✽</div>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Specializing in a variety of mehndi styles for every occasion, each design crafted with precision and artistic flair.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="card-decoration">
                                <div className="corner top-left"></div>
                                <div className="corner top-right"></div>
                                <div className="corner bottom-left"></div>
                                <div className="corner bottom-right"></div>
                            </div>
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-pattern"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pattern-decoration bottom"></div>
        </section>
    );
};

export default Services;