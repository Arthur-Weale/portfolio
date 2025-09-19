import './App.css';
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
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
import profile from './assets/profile.jpg';
// import icons from 'simple-icons/icons.json';

const projectCardData = [
  {
    name: "Intellitrade",
    imageUrl: "public/projects/intellitrade.webp",
    summary:
      "A full-stack web application that allows traders to connect broker accounts, configure automated trading bots, and track performance in real-time.",
    github: "#",
    live: "#",
    icons: [
      {
        iconName: "SiNextdotjs",
        iconColor: "#000000",
      },
    ],
  },
];
function App() {
  return (
    <>
      <nav>
        <a href="#">Arthur.Dev</a>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Connect</a>
          </li>
        </ul>
      </nav>
      <div className="hero-container">
        <div className="left-container">
          <div className="intro">
            <h1>Arthur Weale</h1>
            <h2>Software Developer</h2>
            <p>
              I build responsive, user-friendly web applications using modern
              tools like React, TypeScript, and Node.js. Passionate about clean
              design, scalable code, and always learning.
            </p>
            <div className="socials">
              <SiLinkedin />
              <SiGithub />
              <SiInstagram />
            </div>
            <div className="btn-container">
              <div>Connect</div>
              <div>Resume</div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="image-container">
            <img
              src={profile}
              alt="This my profile image"
              width={"300px"}
              height={"300px"}
            />
          </div>
        </div>
      </div>

      <div className="second-bottom-view">
        <div className="left-view">
          <div className="view-container">
            <div className="view-bottom-container">
              <div className="intro">
                <h1>Arthur Weale</h1>
                <h2>Software Developer</h2>
                <p>
                  I build responsive, user-friendly web applications using
                  modern tools like React, TypeScript, and Node.js. Passionate
                  about clean design, scalable code, and always learning.
                </p>
                <div className="socials">
                  <SiLinkedin />
                  <SiGithub />
                  <SiInstagram />
                </div>
                <div className="btn-container">
                  <div>Connect</div>
                  <div>Resume</div>
                </div>
              </div>
            </div>

            <div className="top-imageview-container">
              <div className="image-container">
                <img
                  src={profile}
                  alt="This my profile image"
                  width={"300px"}
                  height={"300px"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right-view">
          <p>
            I’m a developer passionate about building scalable, impactful
            applications across web, backend, and cross-platform development. I
            enjoy turning ideas into products that balance thoughtful design
            with solid engineering.
          </p>
          <br />
          <p>
            My journey began with Python, but I gravitated toward full-stack
            JavaScript. I use React, TypeScript, and Next.js to build modern,
            responsive apps, and Node.js with PostgreSQL or MongoDB for reliable
            backends. I’m also expanding into C# and .NET, exploring data
            structures, algorithms, and cross-platform frameworks like .NET MAUI
            and React Native.
          </p>
          <br />
          <p>
            I’m growing my skills in cloud (AWS, Azure) and DevOps practices to
            deliver software end-to-end. My goal is to become a well-rounded
            engineer who can create web, mobile, and desktop solutions while
            leveraging modern cloud and CI/CD tools. Outside of coding, I love
            learning new technologies and finding creative ways to solve
            problems.
          </p>
          <div className="projects">
            <h2>Projects</h2>
            <div className="project1">
              <div className="project-image">
                <img
                  src="public/projects/intellitrade.webp"
                  alt="intellitrade app ui"
                />
              </div>
              <div className="project-description">
                <h2>Intellitrade</h2>
                <p>
                  A full-stack web application that allows traders to connect
                  broker accounts, configure automated trading bots, and track
                  performance in real-time.
                </p>
                <div className="action-btn">
                  <button>Live Demo</button>
                  <button>Code</button>
                </div>
                <div className="tech-icons">
                  <SiNextdotjs color="#000000" />
                  <SiTypescript color="#3178C6" />
                  <SiReact color="#61DAFB" />
                  <SiNodedotjs color="#339933" />
                  <SiPostgresql color="#336791" />
                  <SiTailwindcss color="#06B6D4" />
                </div>
              </div>
            </div>
            <div>
              <p>
                Designed in figma and coded in Visual Studio Code. Built using
                HTML, CSS, React and NodeJs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
