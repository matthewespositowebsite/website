import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import Design from './pages/Design'
import Tabletop from './pages/Tabletop'
import Writing from './pages/Writing'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/design" element={<Design />} />
          <Route path="/tabletop" element={<Tabletop />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
