import React from 'react';
import { ArrowRight, Plane as Plant, Database, Laptop, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero section */}
      <div className="relative pt-12 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Grow the</span>
                <span className="block text-green-600">Perfect Crops</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Harness the power of AI to determine the best crops for your land. Input your environmental conditions and get personalized recommendations for maximum yield.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <Link
                  to="/predict"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Try It Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-green-50 rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src="https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg"
                    alt="Farmer in a field"
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How CropSage Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Our AI-powered platform analyzes your environment and recommends the best crops
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Input Your Data</h3>
              <p className="mt-2 text-base text-gray-600">
                Enter details about your soil, climate, and growing conditions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <Laptop className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">AI Analysis</h3>
              <p className="mt-2 text-base text-gray-600">
                Our AI model processes your data to find the optimal crop matches.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <Plant className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Crop Recommendations</h3>
              <p className="mt-2 text-base text-gray-600">
                Receive a ranked list of suitable crops for your specific conditions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Yield Insights</h3>
              <p className="mt-2 text-base text-gray-600">
                Get expected yield data and detailed farming tips for best results.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/predict"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Get Your Recommendations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white">
                  Trusted by farmers across the country
                </h2>
                <div className="mt-6 max-w-3xl mx-auto text-lg text-green-100">
                  <p>
                    "CropSage helped me increase my crop yield by 30% last season by recommending the perfect crops for my soil conditions. The farming tips were extremely practical and easy to follow."
                  </p>
                  <p className="mt-6 font-medium">
                    - Rajesh Kumar, Small-scale farmer from Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;