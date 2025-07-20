import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="henna-overlay"></div>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-icon">✽</div>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Book your mehndi appointment today. Reach out to us for inquiries, bookings, or any questions.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="pattern-decoration"></div>
                        <div className="info-card">
                            <h3 className="info-title">Contact Information</h3>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="info-content">
                                        <h4>Phone Number</h4>
                                        <a href="tel:+919491688449" className="info-link">
                                            +91 94916 88449
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <FaWhatsapp />
                                    </div>
                                    <div className="info-content">
                                        <h4>WhatsApp</h4>
                                        <a href="https://wa.me/919491688449" className="info-link">
                                            Message on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <a href="mailto:dokiparthivijayasri@gmail.com" className="info-link">
                                            dokiparthivijayasri@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p className="info-text">
                                            Serving clients across the region with mobile mehndi services
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <FaClock />
                                    </div>
                                    <div className="info-content">
                                        <h4>Working Hours</h4>
                                        <p className="info-text">
                                            Monday - Sunday: 9:00 AM - 8:00 PM
                                        </p>
                                        <p className="info-note">
                                            *Appointments recommended, especially during festive seasons
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-action">
                        <div className="action-card">
                            <div className="card-decoration"></div>
                            <h3 className="action-title">Book Your Appointment</h3>
                            <p className="action-text">
                                For fastest response, contact us directly via WhatsApp or phone call.
                            </p>

                            <div className="action-buttons">
                                <a href="tel:+919491688449" className="action-btn phone-btn">
                                    <FaPhoneAlt className="btn-icon" /> Call Now
                                </a>
                                <a href="https://wa.me/919491688449" className="action-btn whatsapp-btn">
                                    <FaWhatsapp className="btn-icon" /> WhatsApp
                                </a>
                            </div>

                            <div className="contact-note">
                                <FaClock className="note-icon" />
                                <p>We respond within 30 minutes during business hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;