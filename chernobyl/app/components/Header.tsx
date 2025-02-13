import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative h-screen w-full">
  
      <div className="relative flex h-full items-center justify-start p-10 md:p-20 text-white">
        <div className="max-w-lg bg-black bg-opacity-50 p-6 md:p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The Chernobyl Disaster: A Turning Point in History
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            In April 1986, the Chernobyl nuclear power plant experienced a catastrophic explosion, 
            leading to one of the worst nuclear disasters in history...
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition">
              Learn More
            </button>
            <button className="border border-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
