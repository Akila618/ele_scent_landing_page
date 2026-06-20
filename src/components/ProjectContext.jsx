import { useInView } from '../hooks/useInView'
import './ProjectContext.css'

export default function ProjectContext() {
  const [ref, isInView] = useInView()

  return (
    <section id="context" className={`project-context ${isInView ? 'animate' : ''}`} ref={ref}>
      <div className="context-container">
        
        <div className="context-section">
          <div className="context-header">
            <span className="context-badge">Context</span>
            <h2>Project Background</h2>
          </div>
          <div className="context-body">
            <p>
              Sri Lanka is home to approximately 10% of the global Asian elephant population. Despite conservation efforts, human-elephant conflict (HEC) remains a major issue, leading to over 300 elephant deaths annually, including railway collisions, habitat destruction, and direct human confrontations. The urgent need for a non-intrusive, real-time elephant detection system that works effectively in rural and forested environments has never been greater. 
            </p>
            <p>
              We are engaged in an innovative research project, aiming to develop a real-time elephant detection and analysis system to overcome that problem. Traditional detection methods, such as camera traps, thermal imaging, and GPS tracking, often face limitations due to environmental interference, high costs, and unreliable network coverage in remote locations. This project introduces a low-cost, portable, and non-visual sensing device that identifies elephant presence. This sensor system is complemented by environmental sensors to enhance detection accuracy, and the collected data is processed using machine learning algorithms to classify the elephants’ presence and behavioural state. With a focus on preventing human-elephant conflict and safeguarding Sri Lanka’s elephant population while adhering to ecological and conservation goals, ensuring a sustainable future for elephants in Sri Lanka and beyond.
            </p>
          </div>
        </div>

        <div className="context-divider"></div>

        <div className="context-section">
          <div className="context-header">
            <span className="context-badge">Challenge</span>
            <h2>Problem Statement</h2>
          </div>
          <div className="context-body">
            <p>
              Wildlife conservation is paramount for maintaining biodiversity and ecological balance, particularly for endangered species like the Asian elephant. Sri Lanka hosts a significant portion of the global Asian elephant population, estimated at 5,879 elephants. A major research and practical challenge is human-elephant conflict (HEC), which regrettably leads to over 300 elephant fatalities annually from causes such as railway collisions, habitat destruction, and direct human confrontations. 
            </p>
            <p>
              Existing traditional detection methods, including camera traps, thermal imaging, and GPS tracking, face significant limitations that hinder effective conservation. These limitations stem from environmental interference, high costs, and unreliable network coverage, especially in remote, rural, and forested environments where elephants roam. An urgent and unmet need exists for a non-intrusive, real-time elephant detection system that can operate effectively under these challenging conditions. This highlights a critical gap in current wildlife monitoring technologies that this research seeks to fill.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
