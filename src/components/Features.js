import React from "react";
import "./FeatureSection.css";
import { Wand2, DollarSign, Megaphone } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: <Wand2 />,
            title: "AI Product Descriptions",
            description:
                "Generate SEO-optimized product titles and descriptions that sell — powered by advanced AI language models.",
        },
        {
            icon: <DollarSign />,
            title: "AI Dynamic Pricing",
            description:
                "Let AI analyze competitors, demand, and seasonality to recommend the best prices in real-time.",
        },
        {
            icon: <Megaphone />,
            title: "AI Marketing Copy",
            description:
                "Instantly create catchy taglines, captions, and campaign content that boost engagement and conversions.",
        },
    ];

    return (
        <section className="features-section">
            <div className="header">
                <h2>Powerful AI Tools in One Platform</h2>
                <p>
                    Everything you need to scale your eCommerce business with intelligent automation.
                </p>
            </div>

            <div className="features-row">
                {features.map((feature, i) => (
                    <div key={i} className="feature-card">
                        <div className="icon-circle">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="cta">
                <p>Want to see it in action?</p>
                <button className="cta-btn">
                    Start Your Free Trial <span className="arrow">→</span>
                </button>
            </div>
        </section>
    );
};

export default Features;
