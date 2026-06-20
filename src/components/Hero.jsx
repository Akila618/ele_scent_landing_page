import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-inner fade-in">
        <div className="hero-content glass-panel-dark">
          <h1>Giving Elephants a Voice Through Scent</h1>
          <div className="hero-subtitle">
            <p className="project-tagline">
              ELE-SCENT combines AI and sensor technology to detect elephants through scent patterns, enabling safer wildlife monitoring and supporting conservation efforts.
            </p>
          </div>
          <div className="hero-actions">
            <a href="#about" className="btn-primary">Explore Architecture</a>
            <a href="#data" className="btn-secondary">Request Data</a>
          </div>
        </div>
      </div>
    </section>
  )
}
