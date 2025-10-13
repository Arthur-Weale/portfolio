// import "./App.css";
import {
SiHtml5,
SiCss3,
SiJavascript,
SiTailwindcss,
SiNextdotjs,
SiPostgresql,
SiReact,
SiTypescript,
SiNodedotjs,
} from "react-icons/si";

const projectCardData = [
{
    name: "Intellitrade(In Progress)",
    imageUrl: "/projects/intellitrade.webp",
    imageAlt: "intellitrade app ui",
    summary:
    "A full-stack web application that allows traders to connect broker accounts, configure automated trading bots, and track performance in real-time.",
    github: "https://github.com/Arthur-Weale/intellitrade.git",
    live: "https://intellitrade-nine.vercel.app",
    icons: [
    {
        iconName: "SiNextdotjs",
        iconColor: "#000000",
    },
    {
        iconName: "SiTypescript",
        iconColor: "#3178C6",
    },
    {
        iconName: "SiReact",
        iconColor: "#61DAFB",
    },
    {
        iconName: "SiNodedotjs",
        iconColor: "#339933",
    },
    {
        iconName: "SiPostgresql",
        iconColor: "#336791",
    },
    {
        iconName: "SiTailwindcss",
        iconColor: "#06B6D4",
    },
    ],
},
{
    name: "Wanderwise",
    imageUrl: "/projects/wanderwise.webp",
    imageAlt: "wanderwise app ui",
    summary:
    "Wanderwise is a small travel planning app built with React and Vite. It lets users discover destinationsand preview trips with images and information.",
    github: "https://github.com/Arthur-Weale/wanderwise.git",
    live: "https://wanderwise-explorer.netlify.app/",
    icons: [
    {
        iconName: "SiHtml5",
        iconColor: "#E34F26",
    },
    {
        iconName: "SiJavascript",
        iconColor: "#F7DF1E",
    },
    {
        iconName: "SiCss3",
        iconColor: "#1572B6",
    },
    ],
},
];

const iconMap = {
SiNextdotjs,
SiTypescript,
SiReact,
SiNodedotjs,
SiPostgresql,
SiTailwindcss,
SiHtml5,
SiJavascript,
SiCss3,
};

function ProjectCard(){
    return(
<section id="projects" className="projects">
            <div className="subheading-container">
              <h2 className="projects-header">Projects</h2>
            </div>
            <div className="projects-section">
              {projectCardData.map((card) => (
                <div className="project1" key={card.name}>
                  <div className="project-image">
                    <img
                      src={card.imageUrl}
                      alt={card.imageAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-description">
                    <h2>{card.name}</h2>
                    <p>{card.summary}</p>
                    <div className="action-btn">
                      <button
                        onClick={() =>
                          window.open(
                            card.live,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Live Demo
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            card.github,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        GitHub
                      </button>
                    </div>
                    <div className="tech-icons">
                      {card.icons.map((icon) => {
                        const IconComponent = iconMap[icon.iconName];
                        return (
                          <IconComponent
                            color={icon.iconColor}
                            key={icon.iconName}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
    )
}

export default ProjectCard