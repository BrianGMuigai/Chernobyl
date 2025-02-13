import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-300 bg-opacity-80 shadow-md">
        <div className="text-xl font-bold text-black"> H O B M A X
        </div>
        <div className="flex items-center gap-x-6">
          <ul className="flex space-x-6 text-black text-xl">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Our Story</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Visitor Info</li>
          </ul>
  
        </div>
      </nav>
    </div>
  )
}

export default Navbar