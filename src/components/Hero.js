import React from "react";
import "./Hero.css";

const Hero = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h3 className="tagline">
                    <span className="highlight">AI-Powered</span> Marketing Platform
                </h3>
                <h1 className="title">MarketGenie</h1>
                <p className="subtitle">
                    Supercharge your eCommerce with AI — Generate product descriptions, automate dynamic pricing,
                    and craft perfect marketing content.
                </p>

                <div className="hero-buttons">
                    <button onClick={() => scrollToSection("features")} className="btn explore">Explore Features</button>
                    <button onClick={() => scrollToSection("pricing")} className="btn get-started">Get Started Free</button>
                </div>

                <div className="hero-stats">
                    <div className="stat">
                        <h3>10k+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="stat">
                        <h3>1M+</h3>
                        <p>Products Generated</p>
                    </div>
                    <div className="stat">
                        <h3>98%</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
