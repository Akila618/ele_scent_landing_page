import { useInView } from '../hooks/useInView'
import './ProjectTeam.css'

export default function ProjectTeam() {
  const [ref, isInView] = useInView()
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Saliya Wickramasinghe',
      role: 'Project Coordinator - Supervisor',
      image: '/images/saliya.png'
    },
    {
      id: 2,
      name: 'Sampath Dissanayake',
      role: 'IOT, Reporting and Project Management',
      image: '/images/sampath.png'
    },
    {
      id: 3,
      name: 'Bhanuka Rajagalgoda',
      role: 'Hadware Integration, Machine Learning and Testing',
      image: '/images/bhanuka.png'
    },
    {
      id: 4,
      name: 'Piyumi Paranawithanage',
      role: 'Testing and QA, UI/UX, Documentation',
      image: '/images/puumi.png'
    },
    {
      id: 5,
      name: 'Kaushika Weerakoon',
      role: 'Development, UI/UX, Database, Integration',
      image: '/images/kaushika.png'
    },
    {
      id: 6,
      name: 'Akila Wanninayake',
      role: 'Research, Development, Architecture and Cloud',
      image: '/images/akila.png'
    }
  ]

  return (
    <section className={`project-team ${isInView ? 'animate' : ''}`} ref={ref}>
      <h2>PROJECT TEAM</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
