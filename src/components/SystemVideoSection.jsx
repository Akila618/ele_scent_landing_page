import { useState, useRef, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import './SystemVideoSection.css'

export default function SystemVideoSection() {
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  // Auto-play when entire page is loaded
  useEffect(() => {
    const handlePageLoad = () => {
      if (videoRef.current) {
        // Attempt muted autoplay if supported by browser policy
        videoRef.current.play().catch(() => {
          // Autoplay with audio was blocked by browser policy; user can click play
        })
      }
    }

    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  // Auto-pause when scrolled out of view, auto-resume when scrolled back into view
  useEffect(() => {
    if (videoRef.current) {
      if (!isInView && isPlaying) {
        videoRef.current.pause()
      }
    }
  }, [isInView, isPlaying])

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
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              preload="auto"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/images/elescent.mp4#t=0.001" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
