import './App.css';
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodeDotJs,
} from "react-icons/si";
import profile from './assets/profile.jpg';

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

      <div className="tech-stack">
        <SiHtml5 size={32} color="#E34F26" />
        <SiCss3 size={32} color="#1572B6" />
        <SiJavascript size={32} color="#F7DF1E" />
        <SiReact size={32} color="#61DAFB" />
        <SiTypescript size={32} color="#3178C6" />
        <SiNodeDotJs size={32} color="#339933" />
      </div>
    </>
  );
}

export default App
