import { useState } from 'react'

function Navigation(){
    const [isActive, setIsActive] = useState(false);

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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
    
    </>
}

export default Navigation;