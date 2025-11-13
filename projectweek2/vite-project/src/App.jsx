import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Navbar'
import Home from './Home'
import Contact from './Contact'
import OverOns from './OverOns'
import Bedrijven from './Bedrijven'
import Login from './Login'
import Voorwaarden from './Voorwaarden'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import './css/App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/bedrijven" element={<Bedrijven />} />
        <Route path="/login" element={<Login />} />
        <Route path="/voorwaarden" element={<Voorwaarden />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
