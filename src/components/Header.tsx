import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600 dark:text-green-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              CropSage
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-base font-medium ${
                location.pathname === '/'
                  ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/predict"
              className={`text-base font-medium ${
                location.pathname === '/predict'
                  ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
              }`}
            >
              Predict Crops
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <div className="md:hidden">
              <Link
                to={location.pathname === '/' ? '/predict' : '/'}
                className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
              >
                {location.pathname === '/' ? 'Try It Now' : 'Home'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;