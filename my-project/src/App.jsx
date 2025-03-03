import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import EventList from './pages/EventCard'
import EventHero from './pages/EventHero'
import EventBannerVideo from './pages/EventBannerVideo'
import EventBannersimple from './pages/EventBannersimple'
import ProductCard from './pages/ProductCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-[100%] text-white flex flex-col gap-4 ">
    {/* <Navbar />
    <HeroSection />
    <AboutMe /> */}
      {/* <EventList/> */}
      <EventHero/>
      <EventBannerVideo/>
      <EventBannersimple/>
      <ProductCard/>
  </div>
  )
}

export default App
