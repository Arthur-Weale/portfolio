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
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const projectCardData = [
  {
    name: "Intellitrade(In Progress)",
    imageUrl: "/projects/intellitrade.webp",
    imageAlt: "intellitrade app ui",
    summary:
      "A full-stack web application that allows traders to connect broker accounts, configure automated trading bots, and track performance in real-time.",
    github: "https://github.com/Arthur-Weale/intellitrade.git",
    live: "https://intellitrade-nine.vercel.app/dashboard",
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
      "A full-stack web application that allows traders to connect broker accounts, configure automated trading bots, and track performance in real-time.",
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

function App() {
  const introDivRef = useRef(null);
  const bottomImgRef = useRef(null);
  const btmIntroRef = useRef(null);
  
  useEffect(()=>{
    const el1 = introDivRef.current;
    const el2 = bottomImgRef.current;
    const el3 = btmIntroRef.current;

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: el1, 
        // markers: true,
        start: "top 25%",
        end: "bottom 55%",
        scrub: 3
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: el2,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers: true
      }
    })

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: el3,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        invalidateOnRefresh: true,
        //markers: true
      },
    });

    tl.from(el1, { opacity: 1, y: 0, x: 0, duration: 0.1, ease: "power2.out" }).to(el1, {
      opacity: 0,
      x: 350,
      ease: "power1.in",
    });

    tl2
      .from(el2, { opacity: 0, x: -250, ease: "power2.out"})
      .to(el2, { opacity: 1, x: 0, ease: "power1.in"});

    tl3
      .from(el3, { opacity: 0, x: -250, ease: "power2.out" })
      .to(el3, { opacity: 1, x: 0, ease: "power1.in", duration: 1 });

  }, [])
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Arthur.Dev
        </a>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="#">Contact</a>
          </li> */}
          <li>
            <a href="#">Connect</a>
          </li>
        </ul>
      </nav>
      <div className="hero-container">
        <div className="left-container">
          <div className="intro top-intro">
            <p className="greeting">Hello, I'm</p>
            <h1 className="name">Arthur Weale</h1>
            <h2 className="title">Software Developer</h2>
            <div className="socials">
              <SiLinkedin
                size={30}
                onClick={() =>
                  (window.location.href = "linkedin.com/in/arthur-weale")
                }
              />
              <SiGithub
                size={30}
                onClick={() =>
                  (window.location.href = "https://github.com/Arthur-Weale")
                }
              />
              <SiInstagram
                size={30}
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/saint_claire68/")
                }
              />
            </div>
            <div className="action-btn-container">
              <div className="profile-btn con-btn">Connect</div>
              <div className="profile-btn res-btn">Resume</div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div
            ref={introDivRef}
            className="image-container top-image-container"
          >
            <img
              src={profile}
              alt="This my profile image"
              width={"250px"}
              height={"250px"}
            />
          </div>
        </div>
      </div>

      <div className="second-bottom-view">
        <div className="left-view">
          <div className="bottom-left-container">
            <div ref={bottomImgRef} className="image-container img-cont">
              <img
                src={profile}
                alt="This my profile image"
                width={"250px"}
                height={"250px"}
              />
            </div>
          </div>

          <div className="view-container">
            <div className="view-bottom-container">
              <div ref={btmIntroRef} className="intro">
                <h1>Arthur Weale</h1>
                <h2 className="title">Software Developer</h2>
                <p>
                  I build responsive, user-friendly web applications using
                  modern tools like React, TypeScript, and Node.js. Passionate
                  about clean design, scalable code, and always learning.
                </p>
                <div className="socials">
                  <div className="socials">
                    <SiLinkedin
                      size={30}
                      onClick={() =>
                        (window.location.href = "linkedin.com/in/arthur-weale")
                      }
                    />
                    <SiGithub
                      size={30}
                      onClick={() =>
                        (window.location.href =
                          "https://github.com/Arthur-Weale")
                      }
                    />
                    <SiInstagram
                      size={30}
                      onClick={() =>
                        (window.location.href =
                          "https://www.instagram.com/saint_claire68/")
                      }
                    />
                  </div>
                </div>
                <div className="action-btn-container">
                  <div className="profile-btn">Connect</div>
                  <div className="profile-btn res-btn">Resume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-view">
          <section id="about">
            <h2 className="about-header">About</h2>
            <p>
              I’m a developer passionate about building scalable, impactful
              applications across web, backend, and cross-platform development.
              I enjoy turning ideas into products that balance thoughtful design
              with solid engineering.
            </p>
            <br />
            <p>
              My journey began with Python, but I gravitated toward full-stack
              JavaScript. I use React, TypeScript, and Next.js to build modern,
              responsive apps, and Node.js with PostgreSQL or MongoDB for
              reliable backends. I’m also expanding into C# and .NET, exploring
              data structures, algorithms, and cross-platform frameworks like
              .NET MAUI and React Native.
            </p>
            <br />
            <p>
              I’m growing my skills in cloud (AWS, Azure) and DevOps practices
              to deliver software end-to-end. My goal is to become a
              well-rounded engineer who can create web, mobile, and desktop
              solutions while leveraging modern cloud and CI/CD tools. Outside
              of coding, I love learning new technologies and finding creative
              ways to solve problems.
            </p>
          </section>
          <div className="projects">
            <section id="projects" className="projects">
              <h2 className="projects-header">Projects</h2>
              {projectCardData.map((card) => (
                <div className="project1" key={card.name}>
                  <div className="project-image">
                    <img src={card.imageUrl} alt={card.imageAlt} />
                  </div>
                  <div className="project-description">
                    <h2>{card.name}</h2>
                    <p>{card.summary}</p>
                    <div className="action-btn">
                      <button
                        onClick={() => (window.location.href = card.live)}
                      >
                        Live Demo
                      </button>
                      <button
                        onClick={() => (window.location.href = card.github)}
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
            </section>
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
