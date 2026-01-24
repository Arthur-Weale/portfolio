import { FaEdit } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

async function handleDelete(deletedId){
  const url = `http://localhost:3000/delete/${deletedId}`
  const response = await fetch(url, { 
    method: "DELETE",
    // headers: {
    //   "Content-Type": "Application/Json"
    // }
  })

  if(!response.ok) throw new Error("failed to delete project")
}

function ProjectCardAdmin() {
  const [project, setProjects] = useState([]);
  const url = "http://localhost:3000/projects";

  useEffect(() => {
    async function fetchData() {
      console.log("Hey there dumb dumb this function is working");
      const response = await fetch(url);
      const data = await response.json()
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <section id="projects" className="projects-admin">
      <div className="subheading-container">
        <h2 className="projects-header-admin">Projects List</h2>
      </div>
      <div className="projects-section">
        {project.map((card) => (
          <div className="project-admin" key={card._id}>
            <div className="admin-project-image">
              <img src={card.image} alt={card.imageAlt} loading="lazy" />
            </div>
            <div className="project-description-admin">
              <h2>{card.name}</h2>
              <p>{card.description}</p>
            </div>
            <div className="card-controls">
              <FaEdit size={19} />
              <FaArchive />
              <MdDelete size={20} onClick={async() => {
                try {
                  await handleDelete(card._id)
                } catch (error) {
                  console.error(error.message)
                }
                }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCardAdmin;
