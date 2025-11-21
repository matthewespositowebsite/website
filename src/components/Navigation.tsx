import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const navigationItems = [
  {
    path: '/design',
    label: 'Design',
    previewImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=500&fit=crop'
  },
  {
    path: '/tabletop',
    label: 'Tabletop',
    previewImage: 'https://images.unsplash.com/photo-1578500351865-d19f8bc5a8f5?w=400&h=500&fit=crop'
  },
  {
    path: '/writing',
    label: 'Writing',
    previewImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=500&fit=crop'
  },
  {
    path: '/contact',
    label: 'Contact',
    previewImage: null
  },
]

function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const location = useLocation()

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="nav-home">
          <span className="nav-home-initials">ME</span>
        </Link>

        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hover Preview - appears in non-standard location */}
      {hoveredItem && navigationItems.find(item => item.label === hoveredItem)?.previewImage && (
        <div className="nav-preview">
          <img
            src={navigationItems.find(item => item.label === hoveredItem)?.previewImage || ''}
            alt={`${hoveredItem} preview`}
            className="nav-preview-image"
          />
        </div>
      )}
    </>
  )
}

export default Navigation
