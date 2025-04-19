import { CropResult } from '../types';

// Sample crops data with their descriptions and farming tips
export const crops: CropResult[] = [
  {
    name: 'Rice',
    suitabilityScore: 0,
    expectedYield: '3.5 - 4 tonnes per hectare',
    description: 'A staple food for more than half the world\'s population, rice thrives in warm, humid environments with plenty of rainfall.',
    tips: [
      'Maintain water level of 5-10 cm during the growing period',
      'Apply nitrogen fertilizer in 3 split doses',
      'Control weeds during the first 40 days',
      'Harvest when 80-85% of the grains turn golden yellow'
    ],
    imageUrl: 'https://images.pexels.com/photos/4599540/pexels-photo-4599540.jpeg'
  },
  {
    name: 'Wheat',
    suitabilityScore: 0,
    expectedYield: '2.5 - 3.5 tonnes per hectare',
    description: 'Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food.',
    tips: [
      'Sow at the right time to avoid heat stress during flowering',
      'Ensure proper irrigation at crown root initiation, flowering, and grain filling stages',
      'Control aphids and other pests regularly',
      'Apply potassium to improve drought tolerance'
    ],
    imageUrl: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg'
  },
  {
    name: 'Maize (Corn)',
    suitabilityScore: 0,
    expectedYield: '4.5 - 6 tonnes per hectare',
    description: 'Maize is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.',
    tips: [
      'Plant when soil temperature exceeds 10°C for good germination',
      'Maintain proper spacing (60-75 cm between rows)',
      'Apply nitrogen fertilizer at knee-high stage',
      'Ensure adequate moisture during tasseling and silking stages'
    ],
    imageUrl: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg'
  },
  {
    name: 'Potato',
    suitabilityScore: 0,
    expectedYield: '15 - 20 tonnes per hectare',
    description: 'The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas.',
    tips: [
      'Use certified seed potatoes free from diseases',
      'Plant in well-drained soil with pH 5.0-6.5',
      'Maintain consistent soil moisture to prevent scab',
      'Hill the soil around plants as they grow to prevent greening'
    ],
    imageUrl: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg'
  },
  {
    name: 'Tomato',
    suitabilityScore: 0,
    expectedYield: '25 - 35 tonnes per hectare',
    description: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant.',
    tips: [
      'Provide support for plants (stakes or cages)',
      'Prune suckers to improve air circulation',
      'Water at the base to reduce leaf diseases',
      'Harvest when fruits are firm and fully colored'
    ],
    imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg'
  },
  {
    name: 'Cotton',
    suitabilityScore: 0,
    expectedYield: '1.5 - 2.5 tonnes per hectare',
    description: 'Cotton is a soft, fluffy staple fiber that grows in a boll around the seeds of cotton plants.',
    tips: [
      'Plant when soil temperature is above 16°C',
      'Control early season pests to reduce yield loss',
      'Apply nitrogen based on soil test recommendations',
      'Time irrigation to match critical growth stages'
    ],
    imageUrl: 'https://images.pexels.com/photos/3656388/pexels-photo-3656388.jpeg'
  },
  {
    name: 'Soybean',
    suitabilityScore: 0,
    expectedYield: '2 - 3 tonnes per hectare',
    description: 'Soybean is a species of legume native to East Asia, widely grown for its edible bean, which has numerous uses.',
    tips: [
      'Use inoculants if planting in fields without recent soybean history',
      'Plant in well-drained soil with pH 6.0-7.0',
      'Control weeds early in the growing season',
      'Rotate with non-legume crops to break disease cycles'
    ],
    imageUrl: 'https://images.pexels.com/photos/4749850/pexels-photo-4749850.jpeg'
  },
  {
    name: 'Sugarcane',
    suitabilityScore: 0,
    expectedYield: '70 - 100 tonnes per hectare',
    description: 'Sugarcane is a perennial grass of the genus Saccharum, native to the warm temperate to tropical regions of South and Southeast Asia.',
    tips: [
      'Use disease-free seed cane',
      'Plant in deep, well-drained soils',
      'Maintain adequate moisture during the grand growth period',
      'Harvest at peak maturity for maximum sugar content'
    ],
    imageUrl: 'https://images.pexels.com/photos/2927098/pexels-photo-2927098.jpeg'
  },
  {
    name: 'Sunflower',
    suitabilityScore: 0,
    expectedYield: '1.5 - 2.5 tonnes per hectare',
    description: 'The sunflower is a large annual forb of the genus Helianthus grown as a crop for its edible oil and edible fruits.',
    tips: [
      'Plant when soil temperature reaches 8-10°C',
      'Space plants adequately for proper development',
      'Scout regularly for pests like sunflower moth',
      'Harvest when the back of the head turns yellow to brown'
    ],
    imageUrl: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg'
  },
  {
    name: 'Chickpea',
    suitabilityScore: 0,
    expectedYield: '1 - 2 tonnes per hectare',
    description: 'The chickpea is an annual legume of the family Fabaceae, subfamily Faboideae, with high protein content.',
    tips: [
      'Plant in well-drained soils to avoid root diseases',
      'Apply phosphorus and potassium based on soil tests',
      'Control pod borers during flowering and pod formation',
      'Harvest when plants are fully mature and dry'
    ],
    imageUrl: 'https://images.pexels.com/photos/8420206/pexels-photo-8420206.jpeg'
  }
];

// Soil type options
export const soilTypes = [
  { value: 'clay', label: 'Clay' },
  { value: 'sandy', label: 'Sandy' },
  { value: 'loamy', label: 'Loamy' },
  { value: 'silty', label: 'Silty' },
  { value: 'peaty', label: 'Peaty' },
  { value: 'chalky', label: 'Chalky' },
  { value: 'black', label: 'Black' },
  { value: 'red', label: 'Red' }
];

// Season options
export const seasons = [
  { value: 'winter', label: 'Winter' },
  { value: 'summer', label: 'Summer' },
  { value: 'rainy', label: 'Rainy' },
  { value: 'autumn', label: 'Autumn' },
  { value: 'spring', label: 'Spring' }
];