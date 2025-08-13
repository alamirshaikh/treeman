import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Gallary from './Pages/Gallery'
import About from './Pages/About'
import ServicesNew from './Pages/ServicesNew'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
 

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesNew />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
