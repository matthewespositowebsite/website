import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import Design from './pages/Design'
import Tabletop from './pages/Tabletop'
import Writing from './pages/Writing'
import Contact from './pages/Contact'
import './App.css'

// Handle redirect from 404.html for GitHub Pages
function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath')
      navigate(redirectPath, { replace: true })
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <Router basename="/">
      <RedirectHandler />
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
