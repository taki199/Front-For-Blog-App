import React from 'react';
import heroImage from '../assets/bg.jpg';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg"/>
        </div>
        <div className="md:w-1/2 md:ml-8 text-left">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg text-gray-700 mb-8">Explore the latest articles and insights from our expert writers.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
