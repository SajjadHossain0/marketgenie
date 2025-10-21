import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h2>MarketGenie</h2>
                        <p>AI-powered marketing platform for your eCommerce business.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#"><Facebook /></a>
                            <a href="#"><Twitter /></a>
                            <a href="#"><Instagram /></a>
                            <a href="#"><Linkedin /></a>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Subscribe</h4>
                        <p>Get the latest updates, tips, and offers.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 MarketGenie. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
