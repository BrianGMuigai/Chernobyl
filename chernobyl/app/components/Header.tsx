"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background Image with Next.js */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Image 
          src="/hero.jpg"
          alt="Chernobyl Disaster"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="brightness-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 text-white">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            The Chernobyl Disaster: A Turning Point in History
          </h1>
          
          <p className="text-2xl opacity-90 mb-9 ">
            In April 1986, the Chernobyl nuclear power plant experienced a catastrophic explosion, leading to one of the worst nuclear disasters in history. The event not only caused immediate devastation but also left a lasting impact on environmental policies and public health worldwide.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#learn-more"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </a>
            
            <a 
              href="#explore"
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
