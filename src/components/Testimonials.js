import React from "react";
import "./TestimonialSection.css";

const testimonials = [
    {
        quote:
            "MarketGenie saved us hours of writing! Our conversion rates improved within weeks. The AI descriptions are so natural, customers can't tell they're AI-generated.",
        initials: "SJ",
        name: "Sarah Johnson",
        role: "Store Owner, Fashion Boutique",
    },
    {
        quote:
            "The dynamic pricing feature is a game-changer. It boosted our profit margins by 12% while maintaining competitive prices. Absolutely worth every penny.",
        initials: "DC",
        name: "David Chen",
        role: "eCommerce Manager, Tech Gadgets Inc",
    },
    {
        quote:
            "An all-in-one AI tool for marketing and pricing. Highly recommend for any startup looking to scale efficiently without hiring a full content team.",
        initials: "AP",
        name: "Aisha Patel",
        role: "Digital Marketer, Beauty Brand Co",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <div className="container">
                <h2>Loved by Marketers Worldwide</h2>
                <p>Join thousands of eCommerce businesses growing with MarketGenie</p>

                <div className="testimonial-cards">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <p className="quote">"{t.quote}"</p>
                            <div className="user-info">
                                <div className="avatar">{t.initials}</div>
                                <div>
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="brands">
                    <span>SHOPIFY</span>
                    <span>WOOCOMMERCE</span>
                    <span>MAGENTO</span>
                    <span>BIGCOMMERCE</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
