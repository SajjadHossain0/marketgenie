import React, { useState } from 'react';
import './ProductResult.css';

const ProductResult = ({ result, onReset }) => {
    const [copiedSection, setCopiedSection] = useState(null);

    const copyToClipboard = async (text, section) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedSection(section);
            setTimeout(() => setCopiedSection(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const formatDescription = (description) => {
        return description.split('\n').map((line, index) => {
            if (line.startsWith('**') && line.endsWith('**')) {
                return <strong key={index}>{line.replace(/\*\*/g, '')}</strong>;
            }
            if (line.trim().startsWith('*') && !line.includes('**')) {
                return <li key={index}>{line.replace('*', '').trim()}</li>;
            }
            if (line.trim() === '') {
                return <br key={index} />;
            }
            return <p key={index}>{line}</p>;
        });
    };

    return (
        <div className="product-result">
            <div className="result-header">
                <div className="result-title">
                    <h2>Analysis Complete! 🎉</h2>
                    <p>Your AI-powered product analysis is ready</p>
                </div>
                <button className="new-analysis-btn" onClick={onReset}>
                    ↻ Analyze New Product
                </button>
            </div>

            <div className="results-grid">
                {/* Product Title Card - Full Width */}
                <div className="result-card title-card">
                    <div className="card-header">
                        <span className="card-icon">🏷️</span>
                        <h3>Optimized Product Title</h3>
                        <button
                            className="copy-btn"
                            onClick={() => copyToClipboard(result.productTitle, 'title')}
                        >
                            {copiedSection === 'title' ? '✅ Copied!' : '📋 Copy'}
                        </button>
                    </div>
                    <div className="card-content">
                        <h4 className="optimized-title">{result.productTitle}</h4>
                    </div>
                </div>

                {/* Price and Keywords in same row - 2 columns */}
                <div className="row-cards">
                    {/* Price Card */}
                    <div className="result-card price-card">
                        <div className="card-header">
                            <span className="card-icon">💰</span>
                            <h3>Recommended Price</h3>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(result.recommendedPrice, 'price')}
                            >
                                {copiedSection === 'price' ? '✅ Copied!' : '📋 Copy'}
                            </button>
                        </div>
                        <div className="card-content">
                            <div className="price-display">
                                {result.recommendedPrice.replace(/\*\*/g, '')}
                            </div>
                            <div className="price-note">
                                💡 Based on market competition and optimal profit margin
                            </div>
                        </div>
                    </div>

                    {/* SEO Keywords Card */}
                    <div className="result-card keywords-card">
                        <div className="card-header">
                            <span className="card-icon">🔍</span>
                            <h3>SEO Keywords</h3>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(result.seoKeywords.join(', '), 'keywords')}
                            >
                                {copiedSection === 'keywords' ? '✅ Copied!' : '📋 Copy'}
                            </button>
                        </div>
                        <div className="card-content">
                            <div className="keywords-container">
                                {result.seoKeywords.map((keyword, index) => (
                                    <span key={index} className="keyword-tag">
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Card - Full Width */}
                <div className="result-card description-card">
                    <div className="card-header">
                        <span className="card-icon">📝</span>
                        <h3>SEO-Optimized Description</h3>
                        <button
                            className="copy-btn"
                            onClick={() => copyToClipboard(result.seoOptimizedDescription, 'description')}
                        >
                            {copiedSection === 'description' ? '✅ Copied!' : '📋 Copy'}
                        </button>
                    </div>
                    <div className="card-content">
                        <div className="description-content">
                            {formatDescription(result.seoOptimizedDescription)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="action-btn primary">
                    💾 Save Analysis
                </button>
                <button className="action-btn secondary">
                    📤 Export Report
                </button>
                <button className="action-btn secondary" onClick={onReset}>
                    🔄 New Analysis
                </button>
            </div>
        </div>
    );
};

export default ProductResult;