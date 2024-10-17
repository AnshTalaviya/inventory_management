import React from 'react';
import { Link } from 'react-router-dom';
import ProductCatalog from '../components/ProductCatalog';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">
        Welcome to the Inventory Order System
      </h1>
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
