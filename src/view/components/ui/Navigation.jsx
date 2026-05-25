import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function Navigation(){
    const [isActive, setIsActive] = useState(false);
    const [theme, setTheme] = useState(() => {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        return savedTheme;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    });

    useEffect(() => {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
      setTheme((currentTheme) =>
        currentTheme === "dark" ? "light" : "dark",
      );
    }

    return <>
    <nav>
      <a href="#" className="logo">
        Arthur.Dev
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a
            href="mailto:email@gmail.com?subject=Lets work together&body=hey"
            target="_blank"
          >
            Connect
          </a>
        </li>
      </ul>
      <button
        className="theme-toggle desktop-theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
      </button>

      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>

      {isActive && (
        <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
          <ul className="mobile-menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
            <li>
              <button
                className="theme-toggle mobile-theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } theme`}
              >
                {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
    
    </>
}

export default Navigation;
