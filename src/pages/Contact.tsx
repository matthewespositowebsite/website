import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Minimal Header */}
        <header className="contact-header">
          <h1>Contact</h1>
        </header>

        {/* Main Contact Content - Asymmetrical Layout */}
        <div className="contact-content">
          <div className="contact-primary">
            <p className="contact-statement">
              I work with a select number of clients each year, primarily on residential
              projects in New York and the surrounding region. The process is collaborative
              and unhurried—good design cannot be rushed.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="small-caps contact-label">Email</span>
                <a href="mailto:matthew@matthewesposito.studio" className="contact-link">
                  matthew@matthewesposito.studio
                </a>
              </div>

              <div className="contact-item">
                <span className="small-caps contact-label">Studio</span>
                <p className="contact-info">Brooklyn, New York</p>
              </div>

              <div className="contact-item">
                <span className="small-caps contact-label">Availability</span>
                <p className="contact-info">Accepting inquiries for Spring 2025</p>
              </div>
            </div>
          </div>

          {/* Personal Touch - Curated Interests */}
          <aside className="contact-aside">
            <h3>Currently</h3>
            <ul className="currently-list">
              <li>
                <span className="currently-label">Reading:</span>
                <span className="currently-item">
                  <em>The Timeless Way of Building</em> by Christopher Alexander
                </span>
              </li>
              <li>
                <span className="currently-label">Listening:</span>
                <span className="currently-item">
                  Late Coltrane, early morning walks
                </span>
              </li>
              <li>
                <span className="currently-label">Watching:</span>
                <span className="currently-item">
                  Light move through the studio between 4-6 PM
                </span>
              </li>
              <li>
                <span className="currently-label">Collecting:</span>
                <span className="currently-item">
                  Vintage Eames wire chairs, slowly
                </span>
              </li>
              <li>
                <span className="currently-label">Thinking about:</span>
                <span className="currently-item">
                  The difference between ornament and decoration
                </span>
              </li>
            </ul>

            <div className="contact-note">
              <p className="caption">
                If you're interested in working together, please reach out with some
                details about your project. I respond to all inquiries within a week.
              </p>
            </div>
          </aside>
        </div>

        {/* Footer Note */}
        <footer className="contact-footer">
          <div className="footer-line" />
          <p className="caption">
            This site was designed as a considered exercise in editorial restraint.
            No templates, no AI generation—just deliberate choices about typography,
            layout, and white space.
          </p>
          <p className="caption footer-credit">
            © 2024 Matthew Esposito. All work shown is the property of their respective clients.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default Contact
