import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="henna-overlay"></div>
            <div className="container">
                <div className="about-grid">
                    <div className="about-images">
                        <div className="circle-decoration top-right"></div>
                        <div className="circle-decoration bottom-left"></div>
                        <div className="main-circle">
                            <div className="circle-content">
                                <div className="symbol-container">
                                    <div className="decorative-icon">𓃦</div>
                                    <div className="symbol-decoration"></div>
                                </div>
                                <div className="circle-text">Vijju Mehandi</div>
                                <div className="circle-subtext">Professional Artist</div>
                            </div>
                        </div>
                        <div className="floating-pattern p1"></div>
                        <div className="floating-pattern p2"></div>
                    </div>

                    <div className="about-content">
                        <div className="section-header">
                            <h2 className="about-title">About Vijju Mehandi Artist</h2>
                            <div className="divider">
                                <div className="divider-line"></div>
                                <div className="divider-icon">✽</div>
                                <div className="divider-line"></div>
                            </div>
                        </div>

                        <p className="about-text">
                            With over a decade of experience in the art of mehndi, Vijju brings creativity, precision, and passion to every design. Specializing in both traditional and contemporary styles, she transforms hands and feet into stunning canvases of intricate patterns.
                        </p>

                        <div className="artistic-quote">
                            <div className="quote-icon">"</div>
                            <p className="quote-text">
                                Mehndi is not just art - it's a celebration of tradition, beauty, and the human form
                            </p>
                        </div>

                        <p className="about-text">
                            Her work is characterized by attention to detail, smooth application, and long-lasting results that beautifully complement any celebration. Whether it's your wedding day, a special festival, or a personal celebration, Vijju's artistic touch ensures a memorable mehndi experience.
                        </p>

                        <div className="signature">
                            <div className="signature-name">Vijaya Sri Dokiparthi</div>
                            <div className="signature-title">Lead Mehndi Artist</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;