"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-[#849284] text-gray-800 p-4 flex justify-between items-center px-6 pt-6 ">
      <div className="text-3xl font-extrabold text-black hover:text-gray-600 pl-3">
        
        HBO MAX
        
        </div>
      <div className="hidden md:flex space-x-6 items-center">
        <a href="#about" className="hover:text-black text-xl font-semibold">About Us</a>
        <a href="#story" className="hover:text-black text-xl font-semibold">Our Story</a>
        <a href="#safety" className="hover:text-black text-xl font-semibold">Safety Tips</a>
        <a href="#testimonials" className="hover:text-black text-xl font-semibold">Testimonials</a>
        <a 
          href="#learn-more" 
          className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 text-xl"
        >
          Learn More
        </a>
      </div>

      {/*
       Mobile Menu Toggle 
       */}

      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu
      - Show when isMenuOpen is true
      - Hide when isMenuOpen is false
      */}

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#b0c4b1] md:hidden z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#about" className="hover:text-gray-700">About Us</a>
            <a href="#story" className="hover:text-gray-700">Our Story</a>
            <a href="#safety" className="hover:text-gray-700">Safety Tips</a>
            <a href="#testimonials" className="hover:text-gray-700">Testimonials</a>
            <a 
              href="#learn-more" 
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;