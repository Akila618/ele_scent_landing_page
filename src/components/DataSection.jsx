import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import RequestAccessModal from './RequestAccessModal'
import './DataSection.css'

export default function DataSection() {
  const [ref, isInView] = useInView()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section
        id="data"
        className={`data-section ${isInView ? 'animate' : ''}`}
        ref={ref}
      >
        <img
          src="/images/data-section-bg.jpg"
          alt="Elephants in grassland"
          className="data-section-bg"
        />

        <div className="data-overlay">
          <h2>Unlock the Power of ELE-SCENT Data</h2>
          <p>
            Join us in protecting wildlife and advancing conservation research.
          </p>
          <p>
            Authorized researchers can request access to anonymized sensor data
            to study elephant activity patterns, environmental trends, and
            human-wildlife interactions.
          </p>

          <button
            className="cta-button"
            onClick={() => setShowModal(true)}
          >
            Request Access Today
          </button>
        </div>
      </section>

      <RequestAccessModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  )
}
