import { useEffect, useState } from "react";

async function getProjectCardData(){
  const url = "/projects/projects.json";

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Failed to get projects', error)
    return []
  }
}

function ProjectCard(){
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      const data = await getProjectCardData();
      setProjects(data);
    }
    fetchData()
  }, [])

  useEffect(() => {
    function closeCaseStudy(event) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    if (selectedProject) {
      window.addEventListener("keydown", closeCaseStudy);
    }

    return () => window.removeEventListener("keydown", closeCaseStudy);
  }, [selectedProject]);

    return (
      <section id="projects" className="projects">
        <div className="subheading-container">
          <h2 className="projects-header">Projects</h2>
        </div>
        <div className="projects-section">
          {projects.map((card) => (
            <div
              className={`project1 ${card.featured ? "featured-project" : ""}`}
              key={card._id}
            >
              <div className="project-image">
                <img src={card.image} alt={card.imageAlt} loading="lazy" />
              </div>
              <div className="project-description">
                <div className="project-title-row">
                  <h2>{card.name}</h2>
                  {card.featured && (
                    <span className="featured-label">Strongest project</span>
                  )}
                </div>
                <p>{card.description}</p>
                <div className="action-btn">
                  <button
                    onClick={() =>
                      window.open(card.live, "_blank", "noopener,noreferrer")
                    }
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() =>
                      window.open(card.github, "_blank", "noopener,noreferrer")
                    }
                  >
                    GitHub
                  </button>
                  <button
                    onClick={() => setSelectedProject(card)}
                  >
                    Case Study
                  </button>
                </div>
                <div className="techstack-container">
                  {card.stack.map((technology, index) => (
                    <div className="tech-icons" key={index}>
                      {technology}
                    </div>
                  ))}                  
                </div>

              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div
            className="case-study-backdrop"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <div
              className="case-study-panel"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
            >
              <div className="case-study-header">
                <div>
                  <p className="case-study-label">Project Case Study</p>
                  <h2 id="case-study-title">{selectedProject.name}</h2>
                </div>
                <button
                  className="case-study-close"
                  onClick={() => setSelectedProject(null)}
                  type="button"
                  aria-label="Close case study"
                >
                  Close
                </button>
              </div>

              <p className="case-study-summary">{selectedProject.impact}</p>

              <div className="case-study-grid">
                <div>
                  <h3>Problem</h3>
                  <p>{selectedProject.problem}</p>
                </div>
                <div>
                  <h3>Approach</h3>
                  <p>{selectedProject.approach}</p>
                </div>
                <div>
                  <h3>Learning</h3>
                  <p>{selectedProject.learning}</p>
                </div>
              </div>

              <div className="case-study-actions">
                <button
                  onClick={() =>
                    window.open(
                      selectedProject.live,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Live Demo
                </button>
                <button
                  onClick={() =>
                    window.open(
                      selectedProject.github,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
}

export default ProjectCard
