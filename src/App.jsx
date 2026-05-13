import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import Home from './pages/Home'
import Heating from './pages/Heating'
import Cooling from './pages/Cooling'
import Electrical from './pages/Electrical'
import Daikin from './pages/Daikin'
import Maintenance from './pages/Maintenance'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'
import './App.css'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heating" element={<Heating />} />
            <Route path="/cooling" element={<Cooling />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/daikin" element={<Daikin />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
      </BrowserRouter>
    </HelmetProvider>
  )
}
