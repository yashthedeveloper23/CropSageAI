// Define types for the application

export interface EnvironmentalParams {
  temperature: number;
  humidity: number;
  soilType: string;
  nitrogenLevel: number;
  phosphorusLevel: number;
  potassiumLevel: number;
  rainfall: number;
  phLevel: number;
  season: string;
}

export interface CropResult {
  name: string;
  suitabilityScore: number;
  expectedYield: string;
  description: string;
  tips: string[];
  imageUrl: string;
}