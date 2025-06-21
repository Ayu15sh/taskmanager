import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'



function App() {
  

  return (
    <>
    <Navbar/>
    <section className='h-20'></section>
    <div className="flex  gap-4 justify-center items-center mt-50 flex-col">
     
      <h1 className='text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent'>
        Hello, Ayush
      </h1>
      <p className='text-2xl text-lgrey'>What are the tasks for today? </p>
     
     <Card/>
    </div>
      
    </>
  )
}

export default App
