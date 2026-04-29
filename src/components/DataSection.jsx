import { useInView } from '../hooks/useInView'
import './DataSection.css'

export default function DataSection() {
  const [ref, isInView] = useInView()
  return (
    <section className={`data-section ${isInView ? 'animate' : ''}`} ref={ref}>
      <img src="/images/data-section-bg.jpg" alt="Elephants in grassland" className="data-section-bg" />
      <div className="data-overlay">
        <h2>Unlock the Power of ELE-SCENT Data</h2>
        <p>Join us in protecting wildlife and advancing conservation research.</p>
        <p>Authorized researchers can request access to anonymized sensor data to study elephant activity patterns, environmental trends, and human-wildlife interactions. Your insights help us build smarter solutions for coexistence.</p>
        <button className="cta-button">Request Access Today</button>
      </div>
    </section>
  )
}
