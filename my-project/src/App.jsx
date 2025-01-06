import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-[100%] text-white border border-red-700">
    <Navbar />
    <HeroSection />
    <AboutMe />
  </div>
  )
}

export default App
