import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PredictionForm from '../components/PredictionForm';
import ResultsDisplay from '../components/ResultsDisplay';
import { EnvironmentalParams, CropResult } from '../types';
import { predictCrops } from '../utils/predictionAlgorithm';

const PredictionPage: React.FC = () => {
  const [results, setResults] = useState<CropResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (params: EnvironmentalParams) => {
    setIsLoading(true);
    setHasSubmitted(true);

    // Simulate API call delay
    setTimeout(() => {
      const predictedCrops = predictCrops(params);
      setResults(predictedCrops);
      setIsLoading(false);
      
      // Scroll to results after they're loaded
      if (predictedCrops.length > 0) {
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById('results-section')?.offsetTop || 0,
            behavior: 'smooth'
          });
        }, 100);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Predict the Best Crops for Your Land
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Enter your environmental conditions and our AI will recommend the most suitable crops
              </p>
            </div>

            <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
            
            {isLoading && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm rounded-md text-white bg-green-600 shadow">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing your data...
                </div>
              </div>
            )}
            
            <div id="results-section">
              {!isLoading && hasSubmitted && results.length > 0 && (
                <ResultsDisplay results={results} />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PredictionPage;