import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductResult from './ProductResult';
import LoadingSpinner from './LoadingSpinner';
import './ProductAnalyzer.css';

const ProductAnalyzer = () => {
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const analyzeProduct = async (productTitle) => {
        setLoading(true);
        setError(null);
        setAnalysisResult(null);

        try {
            const response = await fetch('http://localhost:8080/api/v1/products/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: productTitle }),
            });

            if (!response.ok) {
                throw new Error('Analysis failed. Please try again.');
            }

            const data = await response.json();
            console.log(data);
            setAnalysisResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const resetAnalysis = () => {
        setAnalysisResult(null);
        setError(null);
    };

    return (
        <div className="product-analyzer">
            <div className="analyzer-container">

                {/* Main Content */}
                <div className="analyzer-content">
                    {!analysisResult && (
                        <ProductForm
                            onAnalyze={analyzeProduct}
                            loading={loading}
                        />
                    )}

                    {/* Loading State */}
                    {loading && <LoadingSpinner />}

                    {/* Error State */}
                    {error && (
                        <div className="error-state">
                            <div className="error-icon">⚠️</div>
                            <h3>Analysis Failed</h3>
                            <p>{error}</p>
                            <button className="retry-btn" onClick={resetAnalysis}>
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Results */}
                    {analysisResult && !loading && (
                        <ProductResult
                            result={analysisResult}
                            onReset={resetAnalysis}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProductAnalyzer;