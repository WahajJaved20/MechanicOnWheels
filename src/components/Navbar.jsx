import React from 'react';
import { headerCar, logo } from '../assets';
const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-4 py-6 bg-black min-w-[100%] bg-opacity-50">
        <div className="flex justify-center">
          <div className="flex items-center">
            <a href="/" className="flex">
              <img src={logo} alt="Your Logo" className="" />
              <h1 className="text-white text-[60px] text-black font-vvdsBold mb-4">Admin Portal</h1>

            </a>
          </div>
          {/* <div className="flex items-center">
            <button className="font-vvdsRegular text-white text-[20px] px-4">Log In</button>
            <button className="font-vvdsRegular text-white text-[20px] px-4">Service</button>
            <button className="font-vvdsRegular text-white text-[20px] px-4">Packages</button>
            <button className="font-vvdsRegular text-white text-[20px] px-4">Gallery</button>
            <button className="font-vvdsRegular text-white text-[20px] px-4">Shop</button>
            <button className="font-vvdsRegular text-white text-[20px] px-4">About Us</button>
            <button className="font-vvdsRegular text-white text-[20px] px-4">Contact</button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;