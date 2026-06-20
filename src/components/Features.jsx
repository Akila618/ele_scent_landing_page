import './Features.css'

export default function Features() {
  const features = [
    {
      title: "AI-Powered Detection",
      description: "Utilizes advanced machine learning algorithms to identify specific scent patterns associated with elephant presence with high accuracy."
    },
    {
      title: "Sensor Network",
      description: "A robust array of environmental sensors continuously monitors volatile organic compounds (VOCs) and atmospheric data."
    },
    {
      title: "Real-Time Alerts",
      description: "Instant notifications when an elephant is detected, minimizing conflict response time."
    }
  ];

  return (
    <section id="features" className="features-section fade-in">
      <div className="features-container">
        <div className="features-header text-center">
          <span className="section-badge">Technology</span>
          <h2>How ELE-SCENT Works</h2>
          <p>An intelligent ecosystem designed for proactive wildlife monitoring.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card glass-panel-dark fade-in-delay-${index + 1}`}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

