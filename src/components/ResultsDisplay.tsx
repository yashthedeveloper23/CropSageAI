import React, { useState } from 'react';
import { CropResult } from '../types';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface ResultsDisplayProps {
  results: CropResult[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const [expandedCrop, setExpandedCrop] = useState<string | null>(results.length > 0 ? results[0].name : null);

  const toggleExpand = (cropName: string) => {
    setExpandedCrop(expandedCrop === cropName ? null : cropName);
  };

  if (results.length === 0) {
    return null;
  }

  // Group crops by suitability
  const highSuitability = results.filter(crop => crop.suitabilityScore >= 75);
  const mediumSuitability = results.filter(crop => crop.suitabilityScore >= 50 && crop.suitabilityScore < 75);
  const lowSuitability = results.filter(crop => crop.suitabilityScore < 50);

  const renderCropCard = (crop: CropResult) => {
    const isExpanded = expandedCrop === crop.name;
    
    // Determine color based on suitability score
    let scoreColor = 'text-red-600';
    let scoreText = 'Poor Match';
    let scoreBg = 'bg-red-100';
    
    if (crop.suitabilityScore >= 75) {
      scoreColor = 'text-green-600';
      scoreText = 'Excellent Match';
      scoreBg = 'bg-green-100';
    } else if (crop.suitabilityScore >= 50) {
      scoreColor = 'text-yellow-600';
      scoreText = 'Moderate Match';
      scoreBg = 'bg-yellow-100';
    }
    
    return (
      <div key={crop.name} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
        <div 
          className="p-4 cursor-pointer flex justify-between items-center"
          onClick={() => toggleExpand(crop.name)}
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
              <img 
                src={crop.imageUrl} 
                alt={crop.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{crop.name}</h3>
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${scoreBg} ${scoreColor}`}>
                {scoreText} ({crop.suitabilityScore}%)
              </div>
            </div>
          </div>
          <div>
            {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
          </div>
        </div>
        
        {isExpanded && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Description</h4>
                <p className="mt-1 text-gray-800">{crop.description}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Expected Yield</h4>
                <p className="mt-1 text-gray-800">{crop.expectedYield}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Farming Tips</h4>
                <ul className="mt-1 space-y-2">
                  {crop.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                      <span className="text-gray-800">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Crop Recommendations</h2>
      
      {highSuitability.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
            Highly Recommended Crops
          </h3>
          <div className="space-y-4">
            {highSuitability.map(renderCropCard)}
          </div>
        </div>
      )}
      
      {mediumSuitability.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-yellow-700 mb-4 flex items-center">
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            Moderately Suitable Crops
          </h3>
          <div className="space-y-4">
            {mediumSuitability.map(renderCropCard)}
          </div>
        </div>
      )}
      
      {lowSuitability.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            Less Suitable Crops
          </h3>
          <div className="space-y-4">
            {lowSuitability.map(renderCropCard)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;