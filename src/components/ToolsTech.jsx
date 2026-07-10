import { useInView } from '../hooks/useInView'
import './ToolsTech.css'

const toolsAndTech = [
  { name: 'ESP32-based sensing unit', category: 'Hardware' },
  { name: 'Gas sensor array', category: 'Sensing' },
  { name: 'Environmental sensor', category: 'Sensing' },
  { name: 'Python desktop app', category: 'Data collection' },
  { name: 'CustomTkinter', category: 'UI library' },
  { name: 'Random Forest', category: 'Machine learning' },
  { name: 'C++ edge inference', category: 'Embedded AI' },
  { name: 'TensorFlow / TensorFlow Lite', category: 'AI training' },
  { name: 'Rust / Axum', category: 'Device service' },
  { name: 'Java / Spring Boot', category: 'Backend services' },
  { name: 'RabbitMQ', category: 'Messaging' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Figma', category: 'Design' },
  { name: 'Docker', category: 'Containerization' }
]

export default function ToolsTech() {
  const [ref, isInView] = useInView()

  return (
    <section id="tools-tech" className={`tools-tech-section ${isInView ? 'animate' : ''}`} ref={ref}>
      <div className="tools-tech-container">
        <div className="tools-tech-header">
          <span className="tools-tech-badge">Tools and Tech</span>
          <h2>Built Across Hardware, AI, and Cloud</h2>
          <p>
            A simple overview of the main tools and technologies used in ELE-SCENT.
          </p>
        </div>

        <div className="tools-tech-story glass-panel">
          <p>
            ELE-SCENT uses a mix of embedded hardware, machine learning, backend services, and web technologies to support sensing, processing, and visualization.
          </p>
        </div>

        <ul className="tools-tech-list">
          {toolsAndTech.map((item, index) => (
            <li
              key={`${item.name}-${item.category}`}
              className="tools-tech-item"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <span className="tools-tech-category">{item.category}</span>
              <span className="tools-tech-name">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}