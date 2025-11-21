import { useEffect, useState } from 'react'
import './Homepage.css'

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delayed animation trigger for sophisticated entrance
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={`homepage ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero">
        {/* Large, partially obscured hero image */}
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000&h=1200&fit=crop"
            alt="Interior design by Matthew Esposito"
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>

        {/* Typographic name treatment - central visual anchor */}
        <div className="hero-content">
          <h1 className="hero-name">
            <span className="hero-name-first">Matthew</span>
            <span className="hero-name-last">Esposito</span>
          </h1>

          <div className="hero-subtitle">
            <p className="small-caps">Interior Designer</p>
            <p className="hero-location">New York</p>
          </div>
        </div>

        {/* Scroll indicator - subtle and refined */}
        <div className="scroll-indicator">
          <span className="small-caps">Explore</span>
          <div className="scroll-line" />
        </div>
      </div>

      {/* Secondary content area - intentionally asymmetrical */}
      <section className="intro-section">
        <div className="intro-content">
          <div className="intro-text-block">
            <h2>A practice rooted in restraint and refinement</h2>
          </div>

          <div className="intro-description">
            <p>
              Each space is approached as a canvas for deliberate living. My work
              honors the interplay between architecture and atmosphere, where material
              choice, light, and proportion converge to create environments that feel
              both timeless and deeply personal.
            </p>
            <p>
              Based in New York, my practice spans residential interiors, curated
              objects, and occasional writing on design philosophy. The process is
              collaborative, meticulous, and driven by a commitment to authenticity
              over trend.
            </p>
          </div>
        </div>

        {/* Asymmetrical image placement */}
        <div className="intro-images">
          <div className="intro-image-large">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=1000&fit=crop"
              alt="Interior detail"
            />
          </div>
          <div className="intro-image-small">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=600&fit=crop"
              alt="Architectural detail"
            />
            <p className="caption">Detail, Upper East Side residence, 2024</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Homepage
