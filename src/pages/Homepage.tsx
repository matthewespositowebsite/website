import { useEffect, useState } from 'react'
import './Homepage.css'

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const heroImages = [
    '/website/images/hero-01.jpg',
    '/website/images/hero-02.jpg',
    '/website/images/hero-03.jpg'
  ]

  useEffect(() => {
    // Delayed animation trigger for sophisticated entrance
    const timer = setTimeout(() => setIsLoaded(true), 300)

    // Slow image carousel (Robert Stilin inspired)
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearInterval(imageInterval)
    }
  }, [])

  return (
    <main className={`homepage ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero">
        {/* Slow-transitioning hero images */}
        <div className="hero-image-container">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Interior design by Matthew Esposito - ${index + 1}`}
              className={`hero-image ${index === currentImage ? 'active' : ''}`}
            />
          ))}
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

          {/* Personal touch - Atelier MVM inspired */}
          <div className="intro-personal">
            <div className="personal-item">
              <span className="small-caps">Studio Playlist</span>
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0"
                target="_blank"
                rel="noopener noreferrer"
                className="personal-link"
              >
                Music for Slow Afternoons
              </a>
            </div>
          </div>
        </div>

        {/* Asymmetrical image placement - larger, more immersive */}
        <div className="intro-images">
          <div className="intro-image-large">
            <img
              src="/website/images/intro-01.jpg"
              alt="Interior detail"
            />
          </div>
          <div className="intro-image-small">
            <img
              src="/website/images/intro-02.jpg"
              alt="Architectural detail"
            />
            <p className="caption">Detail, Upper East Side residence, 2024</p>
          </div>
        </div>
      </section>

      {/* Full-bleed image section - Valle de Valle inspired */}
      <section className="featured-work">
        <div className="featured-image-container">
          <img
            src="/website/images/featured-01.jpg"
            alt="Featured project"
            className="featured-image"
          />
        </div>
        <div className="featured-caption">
          <span className="caption">Gramercy Residence, 2024</span>
        </div>
      </section>
    </main>
  )
}

export default Homepage
