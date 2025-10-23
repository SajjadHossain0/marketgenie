import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
                <h3>AI is analyzing your product...</h3>
                <p>Researching competitors, optimizing SEO, and setting prices</p>
                <div className="loading-features">
                    <span>🔍 Market Research</span>
                    <span>✍️ Writing Description</span>
                    <span>💰 Price Analysis</span>
                    <span>🏷️ SEO Optimization</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;