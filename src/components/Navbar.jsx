import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate text-white font-inter px-4 py-4 sm:p-6 sm:h-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
        Focus Flow
      </h1>
      <p className='text-sm sm:text-base text-lgrey italic mt-1'>
        "Great things are done by a series of small things brought together."
      </p>
    </nav>
  );
};

export default Navbar;
