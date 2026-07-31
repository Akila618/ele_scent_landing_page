import { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import './SystemVideoSection.css'

export default function SystemVideoSection() {
  const [ref, isInView] = useInView()
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="system-video" className={`system-video-section ${isInView ? 'animate' : ''}`} ref={ref}>
      <div className="system-video-container">
        <div className="system-video-header text-center">
          <span className="section-badge">System Overview</span>
          <h2>See ELE-SCENT in Action</h2>
          <p>Watch a detailed walkthrough of the complete ELE-SCENT monitoring & detection ecosystem.</p>
        </div>

        <div className="system-video-wrapper glass-panel">
          <div className="video-responsive">
            <video
              ref={videoRef}
              className="system-video-element"
              controls
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/images/elescent.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
