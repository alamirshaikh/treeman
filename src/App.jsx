import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ServicesSection from './Components/ServiceSection'
import Services from './Components/Services'
import TreemanPromo from './Components/TreemanPromo'
import TipsAndTricks from './Components/TipsAndTricks'
import TransformSpace from './Components/TransformSpace'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>
  <Navbar/>
  <HeroSection/> 
  <ServicesSection/>
  <Services/>
  <TreemanPromo/>
 <TipsAndTricks/>
 <TransformSpace/>
 <Footer/>
 </div>
    </>
  )
}

export default App
