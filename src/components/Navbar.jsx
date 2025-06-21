import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate text-white font-inter p-6 h-20 flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
        Focus Flow
      </h1>
      <p className='text-lgrey font-inter italic'>
        "Great things are done by a series of small things brought together."
        </p>
      
    </nav>
  )
}

export default Navbar
