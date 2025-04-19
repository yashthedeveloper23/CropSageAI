import { EnvironmentalParams, CropResult } from '../types';
import { crops } from '../data/cropsData';

/**
 * Simulates an AI model that predicts suitable crops based on environmental parameters
 * In a real application, this would connect to an actual ML model
 */
export const predictCrops = (params: EnvironmentalParams): CropResult[] => {
  // Clone the crops array to avoid modifying the original data
  const predictedCrops = JSON.parse(JSON.stringify(crops)) as CropResult[];
  
  // Calculate suitability scores for each crop based on input parameters
  // This is a simplified algorithm that could be replaced with actual ML model
  predictedCrops.forEach(crop => {
    let score = 0;
    
    // Temperature suitability (0-100)
    if (crop.name === 'Rice') {
      score += temperatureScore(params.temperature, 24, 30);
    } else if (crop.name === 'Wheat') {
      score += temperatureScore(params.temperature, 15, 22);
    } else if (crop.name === 'Maize (Corn)') {
      score += temperatureScore(params.temperature, 20, 28);
    } else if (crop.name === 'Potato') {
      score += temperatureScore(params.temperature, 15, 20);
    } else if (crop.name === 'Tomato') {
      score += temperatureScore(params.temperature, 21, 27);
    } else if (crop.name === 'Cotton') {
      score += temperatureScore(params.temperature, 25, 35);
    } else if (crop.name === 'Soybean') {
      score += temperatureScore(params.temperature, 20, 30);
    } else if (crop.name === 'Sugarcane') {
      score += temperatureScore(params.temperature, 24, 34);
    } else if (crop.name === 'Sunflower') {
      score += temperatureScore(params.temperature, 18, 25);
    } else if (crop.name === 'Chickpea') {
      score += temperatureScore(params.temperature, 18, 26);
    }
    
    // Humidity suitability (0-100)
    if (crop.name === 'Rice') {
      score += humidityScore(params.humidity, 70, 90);
    } else if (crop.name === 'Wheat') {
      score += humidityScore(params.humidity, 50, 70);
    } else if (crop.name === 'Maize (Corn)') {
      score += humidityScore(params.humidity, 50, 80);
    } else if (crop.name === 'Potato') {
      score += humidityScore(params.humidity, 60, 80);
    } else if (crop.name === 'Tomato') {
      score += humidityScore(params.humidity, 50, 70);
    } else if (crop.name === 'Cotton') {
      score += humidityScore(params.humidity, 40, 70);
    } else if (crop.name === 'Soybean') {
      score += humidityScore(params.humidity, 60, 80);
    } else if (crop.name === 'Sugarcane') {
      score += humidityScore(params.humidity, 65, 85);
    } else if (crop.name === 'Sunflower') {
      score += humidityScore(params.humidity, 40, 70);
    } else if (crop.name === 'Chickpea') {
      score += humidityScore(params.humidity, 30, 60);
    }
    
    // Soil type suitability (0-100)
    if (crop.name === 'Rice') {
      score += soilTypeScore(params.soilType, ['clay', 'loamy']);
    } else if (crop.name === 'Wheat') {
      score += soilTypeScore(params.soilType, ['loamy', 'clay', 'black']);
    } else if (crop.name === 'Maize (Corn)') {
      score += soilTypeScore(params.soilType, ['loamy', 'sandy', 'black']);
    } else if (crop.name === 'Potato') {
      score += soilTypeScore(params.soilType, ['loamy', 'sandy']);
    } else if (crop.name === 'Tomato') {
      score += soilTypeScore(params.soilType, ['loamy', 'silty']);
    } else if (crop.name === 'Cotton') {
      score += soilTypeScore(params.soilType, ['black', 'loamy', 'clay']);
    } else if (crop.name === 'Soybean') {
      score += soilTypeScore(params.soilType, ['loamy', 'silty']);
    } else if (crop.name === 'Sugarcane') {
      score += soilTypeScore(params.soilType, ['loamy', 'clay', 'black']);
    } else if (crop.name === 'Sunflower') {
      score += soilTypeScore(params.soilType, ['loamy', 'sandy']);
    } else if (crop.name === 'Chickpea') {
      score += soilTypeScore(params.soilType, ['sandy', 'loamy']);
    }
    
    // NPK levels suitability (0-100)
    if (crop.name === 'Rice') {
      score += npkScore(params.nitrogenLevel, 20, 30, params.phosphorusLevel, 10, 20, params.potassiumLevel, 15, 25);
    } else if (crop.name === 'Wheat') {
      score += npkScore(params.nitrogenLevel, 15, 25, params.phosphorusLevel, 15, 25, params.potassiumLevel, 15, 25);
    } else if (crop.name === 'Maize (Corn)') {
      score += npkScore(params.nitrogenLevel, 20, 30, params.phosphorusLevel, 10, 20, params.potassiumLevel, 10, 20);
    } else if (crop.name === 'Potato') {
      score += npkScore(params.nitrogenLevel, 15, 25, params.phosphorusLevel, 20, 30, params.potassiumLevel, 20, 30);
    } else if (crop.name === 'Tomato') {
      score += npkScore(params.nitrogenLevel, 15, 25, params.phosphorusLevel, 15, 25, params.potassiumLevel, 20, 30);
    } else if (crop.name === 'Cotton') {
      score += npkScore(params.nitrogenLevel, 20, 30, params.phosphorusLevel, 10, 20, params.potassiumLevel, 15, 25);
    } else if (crop.name === 'Soybean') {
      score += npkScore(params.nitrogenLevel, 0, 10, params.phosphorusLevel, 15, 25, params.potassiumLevel, 15, 25);
    } else if (crop.name === 'Sugarcane') {
      score += npkScore(params.nitrogenLevel, 20, 30, params.phosphorusLevel, 10, 20, params.potassiumLevel, 20, 30);
    } else if (crop.name === 'Sunflower') {
      score += npkScore(params.nitrogenLevel, 10, 20, params.phosphorusLevel, 15, 25, params.potassiumLevel, 15, 25);
    } else if (crop.name === 'Chickpea') {
      score += npkScore(params.nitrogenLevel, 0, 10, params.phosphorusLevel, 20, 30, params.potassiumLevel, 15, 25);
    }
    
    // Rainfall suitability (0-100)
    if (crop.name === 'Rice') {
      score += rainfallScore(params.rainfall, 100, 200);
    } else if (crop.name === 'Wheat') {
      score += rainfallScore(params.rainfall, 40, 100);
    } else if (crop.name === 'Maize (Corn)') {
      score += rainfallScore(params.rainfall, 50, 120);
    } else if (crop.name === 'Potato') {
      score += rainfallScore(params.rainfall, 40, 80);
    } else if (crop.name === 'Tomato') {
      score += rainfallScore(params.rainfall, 40, 80);
    } else if (crop.name === 'Cotton') {
      score += rainfallScore(params.rainfall, 60, 120);
    } else if (crop.name === 'Soybean') {
      score += rainfallScore(params.rainfall, 50, 100);
    } else if (crop.name === 'Sugarcane') {
      score += rainfallScore(params.rainfall, 100, 200);
    } else if (crop.name === 'Sunflower') {
      score += rainfallScore(params.rainfall, 30, 80);
    } else if (crop.name === 'Chickpea') {
      score += rainfallScore(params.rainfall, 40, 70);
    }
    
    // pH suitability (0-100)
    if (crop.name === 'Rice') {
      score += phScore(params.phLevel, 5.5, 6.5);
    } else if (crop.name === 'Wheat') {
      score += phScore(params.phLevel, 6.0, 7.5);
    } else if (crop.name === 'Maize (Corn)') {
      score += phScore(params.phLevel, 5.5, 7.0);
    } else if (crop.name === 'Potato') {
      score += phScore(params.phLevel, 5.0, 6.5);
    } else if (crop.name === 'Tomato') {
      score += phScore(params.phLevel, 6.0, 7.0);
    } else if (crop.name === 'Cotton') {
      score += phScore(params.phLevel, 6.0, 7.5);
    } else if (crop.name === 'Soybean') {
      score += phScore(params.phLevel, 6.0, 7.0);
    } else if (crop.name === 'Sugarcane') {
      score += phScore(params.phLevel, 5.5, 7.5);
    } else if (crop.name === 'Sunflower') {
      score += phScore(params.phLevel, 6.0, 7.5);
    } else if (crop.name === 'Chickpea') {
      score += phScore(params.phLevel, 6.0, 8.0);
    }
    
    // Season suitability (0-100)
    if (crop.name === 'Rice') {
      score += seasonScore(params.season, ['summer', 'rainy']);
    } else if (crop.name === 'Wheat') {
      score += seasonScore(params.season, ['winter', 'autumn']);
    } else if (crop.name === 'Maize (Corn)') {
      score += seasonScore(params.season, ['summer', 'spring']);
    } else if (crop.name === 'Potato') {
      score += seasonScore(params.season, ['winter', 'spring']);
    } else if (crop.name === 'Tomato') {
      score += seasonScore(params.season, ['summer', 'spring']);
    } else if (crop.name === 'Cotton') {
      score += seasonScore(params.season, ['summer', 'rainy']);
    } else if (crop.name === 'Soybean') {
      score += seasonScore(params.season, ['summer', 'rainy']);
    } else if (crop.name === 'Sugarcane') {
      score += seasonScore(params.season, ['spring', 'summer']);
    } else if (crop.name === 'Sunflower') {
      score += seasonScore(params.season, ['spring', 'summer']);
    } else if (crop.name === 'Chickpea') {
      score += seasonScore(params.season, ['winter', 'autumn']);
    }
    
    // Normalize score to 0-100 range
    crop.suitabilityScore = Math.min(100, Math.round(score / 7));
  });
  
  // Sort crops by suitability score in descending order
  return predictedCrops.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
};

// Helper functions for calculating specific scores

function temperatureScore(actual: number, min: number, max: number): number {
  if (actual >= min && actual <= max) {
    return 100; // Ideal temperature range
  } else if (actual < min) {
    const diff = min - actual;
    return Math.max(0, 100 - (diff * 10));
  } else { // actual > max
    const diff = actual - max;
    return Math.max(0, 100 - (diff * 10));
  }
}

function humidityScore(actual: number, min: number, max: number): number {
  if (actual >= min && actual <= max) {
    return 100; // Ideal humidity range
  } else if (actual < min) {
    const diff = min - actual;
    return Math.max(0, 100 - (diff * 2));
  } else { // actual > max
    const diff = actual - max;
    return Math.max(0, 100 - (diff * 2));
  }
}

function soilTypeScore(actual: string, preferredTypes: string[]): number {
  return preferredTypes.includes(actual) ? 100 : 40;
}

function npkScore(n: number, nMin: number, nMax: number, p: number, pMin: number, pMax: number, k: number, kMin: number, kMax: number): number {
  const nScore = n >= nMin && n <= nMax ? 100 : (n < nMin ? Math.max(0, 100 - ((nMin - n) * 5)) : Math.max(0, 100 - ((n - nMax) * 5)));
  const pScore = p >= pMin && p <= pMax ? 100 : (p < pMin ? Math.max(0, 100 - ((pMin - p) * 5)) : Math.max(0, 100 - ((p - pMax) * 5)));
  const kScore = k >= kMin && k <= kMax ? 100 : (k < kMin ? Math.max(0, 100 - ((kMin - k) * 5)) : Math.max(0, 100 - ((k - kMax) * 5)));
  
  return (nScore + pScore + kScore) / 3;
}

function rainfallScore(actual: number, min: number, max: number): number {
  if (actual >= min && actual <= max) {
    return 100; // Ideal rainfall range
  } else if (actual < min) {
    const diff = min - actual;
    return Math.max(0, 100 - (diff * 1.5));
  } else { // actual > max
    const diff = actual - max;
    return Math.max(0, 100 - (diff * 1.5));
  }
}

function phScore(actual: number, min: number, max: number): number {
  if (actual >= min && actual <= max) {
    return 100; // Ideal pH range
  } else if (actual < min) {
    const diff = min - actual;
    return Math.max(0, 100 - (diff * 20));
  } else { // actual > max
    const diff = actual - max;
    return Math.max(0, 100 - (diff * 20));
  }
}

function seasonScore(actual: string, preferredSeasons: string[]): number {
  return preferredSeasons.includes(actual) ? 100 : 40;
}