import { useInView } from '../hooks/useInView'
import './VisionMission.css'

export default function VisionMission() {
  const [ref, isInView] = useInView()
  return (
    <section id="vision-mission" className={`vision-mission ${isInView ? 'animate' : ''}`} ref={ref}>
      <h2>Our Vision and Mission</h2>
      <div className="vision-mission-container">
        <div className="vision-card">
          <div className="icon">👁️</div>
          <h3>Vision</h3>
          <p>To create a smart and reliable monitoring system that helps protect both wildlife and communities by enabling early detection and proactive management of human-elephant conflict.</p>
        </div>
        <div className="mission-card">
          <div className="icon">🎯</div>
          <h3>Mission</h3>
          <p>To develop an intelligent monitoring system that detects elephant presence, provides timely alerts, and supports wildlife conservation.</p>
        </div>
      </div>
    </section>
  )
}
