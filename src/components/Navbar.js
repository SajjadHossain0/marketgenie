import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    MarketGenie
                </div>

                <ul className="nav-links">
                    <li onClick={() => scrollToSection("hero")}>Home</li>
                    <li onClick={() => scrollToSection("features")}>Features</li>
                    <li onClick={() => scrollToSection("pricing")}>Pricing</li>
                    {/*<li onClick={() => scrollToSection("testimonials")}>Testimonials</li>*/}
                    {/*<li onClick={() => scrollToSection("blog")}>Blog</li>*/}
                </ul>

                <div className="nav-actions">
                    <button onClick={() => scrollToSection("pricing")} className="login-btn">Login</button>
                    <button onClick={() => scrollToSection("pricing")} className="getstarted-btn">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
