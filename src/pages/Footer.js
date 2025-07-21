import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with: ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-top-wave"></div>

            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">
                            <span className="logo-highlight">Vijju</span> Mehandi
                        </h3>
                        <p className="footer-description">
                            Professional mehndi services for weddings, engagements, baby showers, and all celebrations. Bringing artistry and tradition to your special moments.
                        </p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/vijju_mehandi_artist?igsh=eGJsYXJubGxycmw=" aria-label="Instagram" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com/vijjumehandi" aria-label="Facebook" className="social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="tel:+919491688449" aria-label="Call us" className="social-icon">
                                <FaPhoneAlt />
                            </a>
                            <a href="https://wa.me/919491688449" aria-label="WhatsApp" className="social-icon">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="links-list">
                            <li><a href="#services" className="link-hover">Services</a></li>
                            <li><a href="#gallery" className="link-hover">Gallery</a></li>
                            <li><a href="#about" className="link-hover">About</a></li>
                            <li><a href="#contact" className="link-hover">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-hours">
                        <h4 className="footer-title">Working Hours</h4>
                        <ul className="hours-list">
                            <li><FaClock /> <span>Monday - Friday:</span> 10AM - 7PM</li>
                            <li><FaClock /> <span>Saturday:</span> 9AM - 8PM</li>
                            <li><FaClock /> <span>Sunday:</span> 10AM - 5PM</li>
                            <li className="highlight"><FaClock /> <span>Festive Seasons:</span> 24/7</li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <FaPhoneAlt />
                                <a href="tel:+919491688449">+91 9491688449</a>
                            </li>
                            <li>
                                <FaWhatsapp />
                                <a href="https://wa.me/919491688449">Message on WhatsApp</a>
                            </li>
                            <li>
                                <FaEnvelope />
                                <a href="mailto:contactdokiparthivijayasri@gmail.com">contact dokiparthivijayasri@gmail.com</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Vuyyuru, Andhra Pradesh, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-newsletter">
                    <h4>Subscribe to Our Newsletter</h4>
                    <p>Get exclusive offers and mehndi design inspiration</p>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Vijju Mehandi Artist. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                    <p className="design-credit">Designed with ❤️ for beautiful celebrations</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;