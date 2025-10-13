import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

function Socials() {
  return (
    <>
      <div className="socials">
        <div className="socials">
          <SiLinkedin
            size={30}
            onClick={() =>
              window.open(
                "linkedin.com/in/arthur-weale",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <SiGithub
            size={30}
            onClick={() =>
              window.open(
                "https://github.com/Arthur-Weale",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <SiInstagram
            size={30}
            onClick={() =>
              window.open(
                "https://www.instagram.com/saint_claire68/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
      </div>
    </>
  );
}

export default Socials;
