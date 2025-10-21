import React from "react";
import "./PricingSection.css";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$0/mo",
        buttonText: "Try Free",
        features: [
            { name: "10 AI Descriptions / month", available: true },
            { name: "Basic Marketing Copy", available: true },
            { name: "Email Support", available: true },
            { name: "Community Access", available: true },
            { name: "Dynamic Pricing", available: false },
            { name: "API Access", available: false },
            { name: "Priority Support", available: false },
        ],
        popular: false,
    },
    {
        name: "Pro",
        price: "$29/mo",
        buttonText: "Get Started",
        features: [
            { name: "Unlimited AI Descriptions", available: true },
            { name: "AI Dynamic Pricing", available: true },
            { name: "Marketing Copy Generator", available: true },
            { name: "Priority Email Support", available: true },
            { name: "Advanced Analytics", available: true },
            { name: "Custom Integrations", available: true },
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        buttonText: "Contact Sales",
        features: [
            { name: "Everything in Pro", available: true },
            { name: "API Access", available: true },
            { name: "Dedicated Support", available: true },
            { name: "Custom AI Models", available: true },
            { name: "White Label Option", available: true },
            { name: "SLA Guarantee", available: true },
        ],
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section className="pricing-section">
            <motion.div
                className="pricing-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2>Simple & Transparent Pricing</h2>
                <p>Choose the perfect plan for your business. No hidden fees, cancel anytime.</p>
            </motion.div>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={`pricing-card ${plan.popular ? "popular" : ""}`}
                        whileHover={{ scale: 1.05 }}
                    >
                        {plan.popular && <div className="badge">MOST POPULAR</div>}
                        <h3>{plan.name}</h3>
                        <p className="price">{plan.price}</p>
                        <button className="pricing-btn">{plan.buttonText}</button>

                        <ul className="features">
                            {plan.features.map((feature, i) => (
                                <li key={i} className={feature.available ? "available" : "unavailable"}>
                                    {feature.available ? (
                                        <Check size={16} color="#16a34a" />
                                    ) : (
                                        <X size={16} color="#dc2626" />
                                    )}
                                    <span>{feature.name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <p className="guarantee">💰 30-day money-back guarantee · No questions asked</p>
        </section>
    );
};

export default Pricing;
