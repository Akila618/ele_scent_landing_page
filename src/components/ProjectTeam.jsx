import { useInView } from '../hooks/useInView'
import './ProjectTeam.css'

export default function ProjectTeam() {
  const [ref, isInView] = useInView()
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Satya Waidanparthe',
      role: 'Project Coordinator',
      image: '/images/saliya.png'
    },
    {
      id: 2,
      name: 'Sampath Dhanarante',
      role: 'Project Coordinator & ML Lead',
      image: '/images/sampath.png'
    },
    {
      id: 3,
      name: 'Shimoda Chothioriengo',
      role: 'ML & Hardware Integration Lead',
      image: '/images/bhanuka.png'
    },
    {
      id: 4,
      name: 'Priyamth Pnnamahotunge',
      role: 'UI/UX & Graphic Animator Lead',
      image: '/images/puumi.png'
    },
    {
      id: 5,
      name: 'Kausthika Shindaram',
      role: 'Hardware & Communication Lead',
      image: '/images/kaushika.png'
    },
    {
      id: 6,
      name: 'Akila Manchurata',
      role: 'Cloud & Database Lead',
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
