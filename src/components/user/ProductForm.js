import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onAnalyze, loading }) => {
    const [productTitle, setProductTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productTitle.trim() && !loading) {
            onAnalyze(productTitle.trim());
        }
    };

    return (
        <div className="product-form">
            <div className="form-container">
                <div className="form-header">
                    <h2>Analyze Your Product</h2>
                    <p>Enter your product title below to get AI-powered market analysis</p>
                </div>

                <form onSubmit={handleSubmit} className="analysis-form">
                    <div className="input-group">
                        <label htmlFor="productTitle">Product Title</label>
                        <input
                            type="text"
                            id="productTitle"
                            value={productTitle}
                            onChange={(e) => setProductTitle(e.target.value)}
                            placeholder="e.g., Wireless Bluetooth Headphones, Leather Handbag..."
                            disabled={loading}
                            required
                        />
                        <div className="input-hint">
                            💡 Be specific for better analysis results
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="analyze-btn"
                        disabled={!productTitle.trim() || loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-mini"></span>
                                Analyzing...
                            </>
                        ) : (
                            <>
                                <span className="btn-icon">🔍</span>
                                Analyze Product
                            </>
                        )}
                    </button>
                </form>


            </div>
        </div>
    );
};

export default ProductForm;