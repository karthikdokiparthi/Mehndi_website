import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.mobile-nav') && !e.target.closest('.mobile-menu-btn')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <h1 className="logo">
                            <a href='#home'>
                                <span className="logo-highlight">꧁🦚꧂ Vijju</span> Mehandi
                            </a>
                        </h1>
                    </div>

                    <div className="desktop-nav">
                        <a href="#services" className="nav-link">
                            <span className="link-text">Services</span>
                        </a>
                        <a href="#about" className="nav-link">
                            <span className="link-text">About</span>
                        </a>
                        <a href="#gallery" className="nav-link">
                            <span className="link-text">Gallery</span>
                        </a>
                        <a href="#contact" className="nav-link">
                            <span className="link-text">Contact</span>
                        </a>
                        <div className="nav-buttons">
                            <a href="tel:+919491688449" className="btn btn-call">
                                <FaPhoneAlt className="icon" /> Call Now
                            </a>
                            <a href="https://wa.me/919491688449" className="btn btn-whatsapp">
                                <FaWhatsapp className="icon" /> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="mobile-menu-btn">
                        <button onClick={toggleMenu} className="menu-toggle" aria-label="Menu">
                            {isMenuOpen ? (
                                <FaTimes className="close-icon" />
                            ) : (
                                <FaBars className="hamburger" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    <div className="mobile-nav-header">
                        <div className="mobile-logo-container">
                            <div className="henna-icon">
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32,12 C38,6 48,8 52,14 C56,20 54,30 48,36 C42,42 32,40 28,34 C24,28 26,18 32,12 Z" />
                                    <path d="M28,34 C26,38 24,42 20,44 C16,46 12,44 10,40 C8,36 10,32 14,30 C18,28 22,30 24,34 C26,38 28,36 28,34 Z" />
                                    <path d="M36,34 C38,38 40,42 44,44 C48,46 52,44 54,40 C56,36 54,32 50,30 C46,28 42,30 40,34 C38,38 36,36 36,34 Z" />
                                    <path d="M32,36 C30,42 28,48 24,52 C20,56 16,56 14,52 C12,48 14,44 18,42 C22,40 26,42 28,46 C30,50 32,48 32,36 Z" />
                                </svg>
                            </div>
                            <h3 className="mobile-logo">
                                <span className="logo-highlight">Vijju</span> Mehandi
                            </h3>
                        </div>
                        <button onClick={toggleMenu} className="mobile-close-btn" aria-label="Close menu">
                            <FaTimes />
                        </button>
                    </div>

                    <div className="mobile-nav-items">
                        <a href="#services" className="mobile-nav-link" onClick={toggleMenu}>
                            <span className="mobile-link-text">Services</span>
                        </a>
                        <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>
                            <span className="mobile-link-text">About</span>
                        </a>
                        <a href="#gallery" className="mobile-nav-link" onClick={toggleMenu}>
                            <span className="mobile-link-text">Gallery</span>
                        </a>
                        <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
                            <span className="mobile-link-text">Contact</span>
                        </a>
                    </div>

                    <div className="mobile-contact-buttons">
                        <a href="tel:+919491688449" className="btn btn-call mobile-btn" onClick={toggleMenu}>
                            <FaPhoneAlt className="icon" /> Call Now
                        </a>
                        <a href="https://wa.me/919491688449" className="btn btn-whatsapp mobile-btn" onClick={toggleMenu}>
                            <FaWhatsapp className="icon" /> WhatsApp
                        </a>
                    </div>

                    <div className="mobile-social">
                        <p className="social-title">Follow Us:</p>
                        <div className="mobile-social-icons">
                            <a href="https://instagram.com/vijjumehandi" aria-label="Instagram" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com/vijjumehandi" aria-label="Facebook" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;