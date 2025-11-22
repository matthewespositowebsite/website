import { useState } from 'react'
import './Design.css'

interface Project {
  id: number
  title: string
  location: string
  year: string
  description: string
  images: string[]
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Gramercy Residence',
    location: 'New York, NY',
    year: '2024',
    description: 'A study in monochromatic restraint. This pre-war apartment was reimagined to honor its architectural bones while introducing a contemporary material palette of limestone, blackened steel, and Belgian linen.',
    images: [
      '/images/project-01-main.jpg',
      '/images/project-01-detail-01.jpg',
      '/images/project-01-detail-02.jpg',
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Brooklyn Heights Studio',
    location: 'Brooklyn, NY',
    year: '2023',
    description: 'For a photographer and writer couple, this project prioritized natural light and flexible space. Custom millwork creates fluid transitions between work and living areas.',
    images: [
      '/images/project-02-main.jpg',
      '/images/project-02-detail-01.jpg',
      '/images/project-02-detail-02.jpg',
    ],
    featured: false
  },
  {
    id: 3,
    title: 'Hudson Valley Retreat',
    location: 'Hudson Valley, NY',
    year: '2023',
    description: 'A weekend house that dissolves the boundary between interior and landscape. Concrete, glass, and white oak create a dialogue with the surrounding forest.',
    images: [
      '/images/project-03-main.jpg',
      '/images/project-03-detail-01.jpg',
    ],
    featured: true
  },
  {
    id: 4,
    title: 'Tribeca Loft',
    location: 'New York, NY',
    year: '2022',
    description: 'An exercise in edited luxury. The existing industrial shell was preserved while introducing carefully selected vintage furniture and bespoke lighting.',
    images: [
      '/images/project-04-main.jpg',
      '/images/project-04-detail-01.jpg',
    ],
    featured: false
  },
]

function Design() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  return (
    <main className="design-page">
      <div className="design-container">
        {/* Page Header */}
        <header className="design-header">
          <h1>Design</h1>
          <p className="design-intro">
            Selected residential and commercial projects, 2022—2024
          </p>
        </header>

        {/* Project Grid - Asymmetrical Layout */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''} layout-${index % 3}`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="small-caps">View Project</span>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="caption">{project.location}</span>
                  <span className="caption">—</span>
                  <span className="caption">{project.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Project View - Modal/Overlay */}
        {selectedProject && selectedProjectData && (
          <div className="project-detail-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-detail" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project"
              >
                <span className="close-icon">×</span>
              </button>

              <div className="project-detail-content">
                <div className="project-detail-header">
                  <h2>{selectedProjectData.title}</h2>
                  <div className="project-detail-meta">
                    <span className="caption">{selectedProjectData.location}</span>
                    <span className="caption">—</span>
                    <span className="caption">{selectedProjectData.year}</span>
                  </div>
                </div>

                <div className="project-detail-body">
                  <div className="project-detail-description">
                    <p>{selectedProjectData.description}</p>
                  </div>

                  <div className="project-detail-images">
                    {selectedProjectData.images.map((image, idx) => (
                      <div key={idx} className={`detail-image-wrapper image-${idx}`}>
                        <img src={image} alt={`${selectedProjectData.title} - Image ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Design
