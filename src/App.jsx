import './App.css';
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiReact,
  SiTypescript,
  SiNodedotjs,
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

      {/* <div className="tech-stack">
        <SiReact size={32} color="#61DAFB" />
        <SiTypescript size={32} color="#3178C6" />
        <SiNodedotjs size={32} color="#339933" />
      </div> */}

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
            I’m a developer passionate about building applications that are not
            only functional, but scalable and impactful. My work spans across
            web, backend, and emerging cross-platform development, with a focus
            on creating experiences that are both intuitive and technically
            sound. I enjoy the challenge of taking an idea from scratch and
            shaping it into a working product that balances thoughtful design
            with solid engineering. My journey started with Python, which gave
            me a strong foundation in programming fundamentals, but over time I
            gravitated toward full-stack JavaScript. I’ve worked with HTML, CSS,
            and JavaScript to build web interfaces, while React, TypeScript, and
            Next.js allow me to design modern, responsive, and maintainable
            applications. On the backend, I’ve explored Node.js with Express,
            connecting to databases such as PostgreSQL, MongoDB, and MySQL, and
            I particularly enjoy the reliability and structure that PostgreSQL
            brings. More recently, I’ve been diving deeper into C#, exploring
            data structures and algorithms, and extending that knowledge toward
            .NET development. I see C# as a long-term focus for building robust
            desktop, web, and mobile solutions — and I’m currently exploring
            .NET MAUI as well as mobile frameworks like React Native and Flutter
            to broaden my reach. My roadmap also includes cloud platforms like
            AWS and Azure, alongside DevOps practices like CI/CD and pipelines,
            because I believe a modern engineer should understand how to deliver
            software end-to-end. Looking ahead, my goal is to grow into a
            well-rounded software engineer who can seamlessly move between web
            apps, mobile apps, and desktop apps, while also leveraging cloud and
            DevOps tools to deliver complete solutions. Outside of coding, I
            enjoy learning about new technologies, refining my problem-solving
            skills, and imagining the kind of products that can make life
            simpler and more efficient. For me, being a developer isn’t just
            about writing code — it’s about solving problems in creative ways
            and continuously pushing myself to improve.
          </p>
          <div className='projects'>
            <h2>Projects</h2>
            <div className='Project1'>
            </div>
            <div className='Project2'>
            </div>
            <div className='Project3'>
            </div>
            <div>
              <p>Designed in figma and coded in Visual Studio Code. Built using HTML, CSS, React and NodeJs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
