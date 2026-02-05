import { useEffect, useState } from "react";

async function getProjectCardData(){
  const url = "src/model/projects.json";

  try {
    console.log("Hey there dumb dumb this function is working");
    const response = await fetch(url);
    console.log(response)
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.log('Failed to get projecs', error)
    return []
  }
}

function ProjectCard(){
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      console.log("Hey there dumb dumb");
      const data = await getProjectCardData();
      console.log(data)
      setProjects(data);
    }
    fetchData()
  }, [])

    return (
      <section id="projects" className="projects">
        <div className="subheading-container">
          <h2 className="projects-header">Projects</h2>
        </div>
        <div className="projects-section">
          {projects.map((card) => (
            <div className="project1" key={card._id}>
              <div className="project-image">
                <img src={card.image} alt={card.imageAlt} loading="lazy" />
              </div>
              <div className="project-description">
                <h2>{card.name}</h2>
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
      </section>
    );
}

export default ProjectCard