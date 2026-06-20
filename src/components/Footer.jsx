import { useInView } from '../hooks/useInView'
import './Footer.css'

export default function Footer() {
  const [ref, isInView] = useInView()
  return (
    <footer className={`footer ${isInView ? 'animate' : ''}`} ref={ref}>
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} ELE-SCENT TEAM</p>
        <p className="mb-1">Department of Electrical and Computer Engineering</p>
        <p className="mb-0">The Open University of Sri Lanka</p>
      </div>
    </footer>
  )
}
