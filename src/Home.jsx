import "./App.css";
import profile from "./assets/profile.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect} from "react";
import ProjectCard from "./view/components/ui/ProjectCard";
import About from "./view/components/ui/About";
import Navigation from "./view/components/ui/Navigation";
import Socials from "./view/components/ui/Social";
import { CiGlobe } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

function Home() {
const introDivRef = useRef(null);
const bottomImgRef = useRef(null);
const btmIntroRef = useRef(null);

useEffect(() => {
    const el1 = introDivRef.current;
    const el2 = bottomImgRef.current;
    const el3 = btmIntroRef.current;

    const responsiveViews = gsap.matchMedia();

    responsiveViews.add("(min-width: 1024px)", ()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: el1,
            start: "top 25%",
            end: "bottom 55%",
            scrub: 3,
            },
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
            trigger: el2,
            start: "top 80%",
            end: "top 60%",
            scrub: 2,
            // markers: true
            },
        });

        const tl3 = gsap.timeline({
            scrollTrigger: {
            trigger: el3,
            start: "top 80%",
            end: "bottom 90%",
            scrub: 1,
            invalidateOnRefresh: true,
            //markers: true
            },
        });

        tl.from(el1, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.1,
            ease: "power2.out",
        }).to(el1, {
            opacity: 0,
            x: 350,
            ease: "power1.in",
        });

        tl2
            .from(el2, { opacity: 0, x: -250, ease: "power2.out" })
            .to(el2, { opacity: 1, x: 0, ease: "power1.in" });

        tl3
            .from(el3, { opacity: 0, x: -250, ease: "power2.out" })
            .to(el3, { opacity: 1, x: 0, ease: "power1.in", duration: 1 });
    });

    return ()=> responsiveViews.revert();
}, []);
return (
  <>
    <Navigation />
    <div className="hero-container">
      <div className="left-container">
        <div className="intro top-intro">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Arthur Weale</h1>
          <h2 className="title">Software Developer</h2>
          <p className="location">
            <CiGlobe />
            Zimbabwe, ZW
          </p>
          <Socials />
          <div className="action-btn-container">
            <div
              className="profile-btn"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com&su=Let’s%20Work%20Together&body=Hey%20Arthur,%20I%20saw%20your%20portfolio%20and...",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Connect
            </div>
            <div
              className="profile-btn res-btn"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "/projects/Arthur Weale_Resume-Junior Software Developer.pdf",
                )
              }
            >
              Resumé
            </div>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div ref={introDivRef} className="image-container top-image-container">
          <img
            src={profile}
            alt="This is a profile image of Arthur Weale"
            width={"250px"}
            height={"250px"}
            loading="lazy"
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
              alt="This is a profile image of Arthur Weale"
              width={"250px"}
              height={"250px"}
              loading="lazy"
            />
          </div>
        </div>

        <div className="view-container">
          <div className="view-bottom-container">
            <div ref={btmIntroRef} className="intro">
              <p className="greeting">Hello, I'm</p>
              <h1>Arthur Weale</h1>
              <p className="location">
                <CiGlobe />
                Zimbabwe, ZW
              </p>
              <h2 className="title">Software Developer</h2>
              <p>
                I build responsive, user-friendly web applications using modern
                tools like React, TypeScript, and Node.js. Passionate about
                clean design, scalable code, and always learning.
              </p>
              <Socials />
              <div className="action-btn-container">
                <div
                  className="profile-btn"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com&su=Let’s%20Work%20Together&body=Hey%20Arthur,%20I%20saw%20your%20portfolio%20and...",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Connect
                </div>
                <div
                  className="profile-btn res-btn"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "/projects/Arthur Weale_Resume-Junior Software Developer.pdf",
                    )
                  }
                >
                  Resumé
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-view">
        <About />
        <div className="projects">
          <ProjectCard />
          <div>
            <p>
              Designed in figma and coded in Visual Studio Code. Built using
              HTML, CSS, React and NodeJs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Home;
