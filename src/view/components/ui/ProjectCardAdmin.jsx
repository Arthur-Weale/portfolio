import { FaEdit } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const projectCardData = [
  {
    name: "Intellitrade(In Progress)",
    imageUrl: "/projects/intellitrade.webp",
    imageAlt: "intellitrade app ui",
    summary:
      "A full-stack web application that allows traders to connect broker accounts, configure automated trading bots, and track performance in real-time.",
  },
  {
    name: "Wanderwise",
    imageUrl: "/projects/wanderwise.webp",
    imageAlt: "wanderwise app ui",
    summary:
      "Wanderwise is a small travel planning app built with React and Vite. It lets users discover destinationsand preview trips with images and information.",
  },
];

function ProjectCardAdmin() {
  return (
    <section id="projects" className="projects-admin">
      <div className="subheading-container">
        <h2 className="projects-header-admin">Projects List</h2>
      </div>
      <div className="projects-section">
        {projectCardData.map((card) => (
          <div className="project-admin" key={card.name}>
            <div className="admin-project-image">
              <img src={card.imageUrl} alt={card.imageAlt} loading="lazy" />
            </div>
            <div className="project-description-admin">
              <h2>{card.name}</h2>
              <p>{card.summary}</p>
            </div>
            <div className="card-controls">
              <FaEdit size={19} />
              <FaArchive />
              <MdDelete size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCardAdmin;
