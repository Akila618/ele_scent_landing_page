import { useInView } from '../hooks/useInView'
import './Footer.css'

export default function Footer() {
  const [ref, isInView] = useInView()
  return (
    <footer className={`footer ${isInView ? 'animate' : ''}`} ref={ref}>
      <p>&copy; 2026 ELE-SCENT. All rights reserved.</p>
    </footer>
  )
}
