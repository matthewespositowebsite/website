import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const navigationItems = [
  {
    path: '/design',
    label: 'Design',
    previewImage: '/website/images/nav-design.jpg'
  },
  {
    path: '/tabletop',
    label: 'Tabletop',
    previewImage: '/website/images/nav-tabletop.jpg'
  },
  {
    path: '/writing',
    label: 'Writing',
    previewImage: '/website/images/nav-writing.jpg'
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
