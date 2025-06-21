import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <section className='h-10 sm:h-20'></section>

      <div className="flex flex-col items-center justify-center px-4 sm:px-8 gap-6">
        <h1 className='text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent'>
          Hello, Ayush
        </h1>
        <p className='text-lg sm:text-2xl text-lgrey text-center'>
          What are the tasks for today?
        </p>

        <Card />
      </div>
    </>
  )
}

export default App
