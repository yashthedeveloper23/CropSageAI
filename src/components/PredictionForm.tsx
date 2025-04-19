import React, { useState } from 'react';
import { soilTypes, seasons } from '../data/cropsData';
import { EnvironmentalParams } from '../types';
import { Info } from 'lucide-react';

interface PredictionFormProps {
  onSubmit: (params: EnvironmentalParams) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<EnvironmentalParams>({
    temperature: 25,
    humidity: 60,
    soilType: 'loamy',
    nitrogenLevel: 20,
    phosphorusLevel: 15,
    potassiumLevel: 15,
    rainfall: 100,
    phLevel: 6.5,
    season: 'summer'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Convert numeric values
    const numericValue = 
      name === 'temperature' || 
      name === 'humidity' || 
      name === 'nitrogenLevel' || 
      name === 'phosphorusLevel' || 
      name === 'potassiumLevel' || 
      name === 'rainfall' || 
      name === 'phLevel'
        ? parseFloat(value)
        : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: numericValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const Tooltip = ({ content }: { content: string }) => (
    <div className="group relative inline-block ml-1">
      <Info className="h-4 w-4 text-gray-500 cursor-help" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Enter Your Environmental Parameters
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temperature */}
          <div>
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Temperature (°C)
              <Tooltip content="Average temperature in Celsius. Most crops have optimal temperature ranges for growth." />
            </label>
            <input
              type="number"
              id="temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              min="0"
              max="50"
              step="0.1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>0°C</span>
              <span>50°C</span>
            </div>
          </div>
          
          {/* Humidity */}
          <div>
            <label htmlFor="humidity" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Humidity (%)
              <Tooltip content="Relative humidity in percentage. Affects plant transpiration and disease pressure." />
            </label>
            <input
              type="number"
              id="humidity"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              min="0"
              max="100"
              step="1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
          
          {/* Soil Type */}
          <div>
            <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Soil Type
              <Tooltip content="The type of soil in your field. Different crops prefer different soil types." />
            </label>
            <select
              id="soilType"
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              {soilTypes.map(soil => (
                <option key={soil.value} value={soil.value}>
                  {soil.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Season */}
          <div>
            <label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Growing Season
              <Tooltip content="The season when you plan to grow crops. Different crops thrive in different seasons." />
            </label>
            <select
              id="season"
              name="season"
              value={formData.season}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              {seasons.map(season => (
                <option key={season.value} value={season.value}>
                  {season.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nitrogen Level */}
          <div>
            <label htmlFor="nitrogenLevel" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Nitrogen Level (kg/ha)
              <Tooltip content="Amount of nitrogen in soil. Essential for leaf growth and green vegetation." />
            </label>
            <input
              type="number"
              id="nitrogenLevel"
              name="nitrogenLevel"
              value={formData.nitrogenLevel}
              onChange={handleChange}
              min="0"
              max="100"
              step="1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          
          {/* Phosphorus Level */}
          <div>
            <label htmlFor="phosphorusLevel" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Phosphorus Level (kg/ha)
              <Tooltip content="Amount of phosphorus in soil. Important for root development and flowering." />
            </label>
            <input
              type="number"
              id="phosphorusLevel"
              name="phosphorusLevel"
              value={formData.phosphorusLevel}
              onChange={handleChange}
              min="0"
              max="100"
              step="1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          
          {/* Potassium Level */}
          <div>
            <label htmlFor="potassiumLevel" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Potassium Level (kg/ha)
              <Tooltip content="Amount of potassium in soil. Helps with overall plant health and stress resistance." />
            </label>
            <input
              type="number"
              id="potassiumLevel"
              name="potassiumLevel"
              value={formData.potassiumLevel}
              onChange={handleChange}
              min="0"
              max="100"
              step="1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rainfall */}
          <div>
            <label htmlFor="rainfall" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Rainfall (mm/month)
              <Tooltip content="Average monthly rainfall in millimeters. Affects water availability for crops." />
            </label>
            <input
              type="number"
              id="rainfall"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              min="0"
              max="500"
              step="1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          
          {/* pH Level */}
          <div>
            <label htmlFor="phLevel" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Soil pH
              <Tooltip content="pH level of soil. Different crops thrive in different pH ranges." />
            </label>
            <input
              type="number"
              id="phLevel"
              name="phLevel"
              value={formData.phLevel}
              onChange={handleChange}
              min="0"
              max="14"
              step="0.1"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>Acidic (0)</span>
              <span>Neutral (7)</span>
              <span>Alkaline (14)</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className={`px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Get Crop Recommendations'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;