import { useInView } from '../hooks/useInView'
import './ProjectTeam.css'

export default function ProjectTeam() {
  const [ref, isInView] = useInView()
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Saliya Wickramasinghe',
      role: 'Project Coordinator - Supervisor (CITES OUSL)',
      image: '/images/saliya.png',
      linkedin: 'https://www.linkedin.com/in/saliya-wickramasinghe-2b0636b8/'
    },
    {
      id: 2,
      name: 'Akila Wanninayake',
      role: 'Team Lead, Research & Development, Architecture, Machine Learning',
      image: '/images/akila2.jpeg',
      linkedin: 'https://www.linkedin.com/in/akila-wanninayake-4340b0217/'
    },
    {
      id: 3,
      name: 'Bhanuka Rajagalgoda',
      role: 'Hardware Integration, Machine Learning and Testing',
      image: '/images/bhanuka.png',
      linkedin: 'https://www.linkedin.com/in/bhanukachathuranga/'
    },
    {
      id: 4,
      name: 'Piyumi Paranawithanage',
      role: 'Testing and QA, UI/UX, Documentation',
      image: '/images/puumi.png',
      linkedin: 'https://www.linkedin.com/in/piyumi-paranavithanage-b1715a217/'
    },
    {
      id: 5,
      name: 'Kaushika Weerakoon',
      role: 'Development, UI/UX, Database, Integration',
      image: '/images/kaushika.png',
      linkedin: 'https://www.linkedin.com/in/kaushika-w/'
    },
    {
      id: 6,
      name: 'Sampath Dissanayake',
      role: 'IOT, Reporting and Project Management',
      image: '/images/sampath.png',
      linkedin: 'https://www.linkedin.com/in/thusitha-sampath-dissanayake-4724a91b3/'
    }
  ]

  return (
    <section className={`project-team ${isInView ? 'animate' : ''}`} ref={ref}>
      <h2>Project Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <div className="member-image-container">
              <img src={member.image} alt={member.name} className="member-image" />
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn" aria-label={`LinkedIn of ${member.name}`}>
                  <svg xmlns="http://www.svg.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
