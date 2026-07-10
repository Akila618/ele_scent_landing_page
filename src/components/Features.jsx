import { useInView } from '../hooks/useInView'
import './Features.css'

export default function Features() {
  const [ref, isInView] = useInView()

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
    <section id="features" className={`features-section ${isInView ? 'animate' : ''}`} ref={ref}>
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

        <div className="features-story glass-panel-dark">
          <p>
            The ELE-SCENT system architecture operates across an integrated edge to cloud framework, beginning with a custom electronic nose device built around a microcontroller with a specialized gas sensor array. Operating offline, this edge device captures raw chemical signatures and processes them locally using an embedded machine learning model that delivers real time probability predictions in under one second. When the detection threshold is reached, the device can trigger local onsite alerts and transmit low bandwidth telemetry through GSM or LoRa WAN gateways to the centralized cloud backend. In the cloud layer, a polyglot microservice architecture manages the system, using a Rust based Device Management Service that validates device IDs and routes incoming telemetry through a RabbitMQ message broker. This asynchronous data is then consumed by Spring Boot based Java microservices, including Data Processing, Reporting, and User Management, which persist records in PostgreSQL databases and push verified alerts through REST and WebSocket APIs to a real time frontend web dashboard.
          </p>
        </div>

        <div className="features-diagram">
          <img src="/images/how-it-works.png" alt="How ELE-SCENT works" className="features-image" />
        </div>
      </div>
    </section>
  )
}

