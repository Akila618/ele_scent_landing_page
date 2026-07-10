import { useInView } from '../hooks/useInView'
import './ConfidentialResultsSection.css'

const confidentialImages = [
  '/images/c1.png',
  '/images/c2.png',
  '/images/c3.png',
  '/images/c4.png'
]

export default function ConfidentialResultsSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="results" className={`confidential-section ${isInView ? 'animate' : ''}`} ref={ref}>
      <div className="confidential-container">
        <div className="confidential-heading">
          <span className="confidential-badge">Results</span>
          <h2>Results and Technical Archive</h2>
        </div>

        <div className="confidential-layout">
          <div className="confidential-stack" aria-label="Sensitive prototype image stack">
            {confidentialImages.map((image, index) => (
              <div key={image} className={`confidential-card confidential-card-${index + 1}`}>
                <img src={image} alt="Sensitive prototype reference" className="confidential-image" />
                <div className="confidential-overlay">Restricted Preview</div>
              </div>
            ))}
          </div>

          <div className="confidential-copy glass-panel">
            <p>
              Contact us to request the results, reports, and technical information related to this stage of the ELE-SCENT project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}