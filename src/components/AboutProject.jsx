import { useInView } from '../hooks/useInView'
import './AboutProject.css'

export default function AboutProject() {
  const [ref, isInView] = useInView()
  return (
    <section id="about" className={`about-project ${isInView ? 'animate' : ''}`} ref={ref}>
      <div className="about-container">
        <div className="about-content">
          <h2>About the Project Ele-Scent</h2>
          <p>
            ELE-SCENT is an intelligent environmental monitoring system designed to help reduce human–elephant conflict by detecting the possible presence of elephants near vulnerable areas.
          </p>
          <p>
            The system analyzes environmental signals using advanced sensing and machine learning techniques to identify patterns associated with elephant activity. When a potential detection is confirmed through multi-sensor validation, the system triggers timely responses by relevant authorities. Through a centralized web dashboard, stakeholders can access real-time alerts, historical data, enabling more informed decision-making for wildlife conservation and community safety.
          </p>
        </div>
        <div className="about-diagram">
          <img src="/images/system-diagram.jpg" alt="ELE-SCENT System Diagram" className="diagram-image" />
        </div>
      </div>
    </section>
  )
}
