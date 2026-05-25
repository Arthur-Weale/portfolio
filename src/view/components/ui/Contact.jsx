import { SiGithub, SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="subheading-container">
        <h2 className="contact-header">Contact</h2>
      </div>

      <div className="contact-section">
        <p>
          I am open to junior software developer roles, internships, and
          projects where I can keep learning while building useful software.
        </p>

        <div className="contact-actions">
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=ajayrossy340@gmail.com&su=Let%27s%20Work%20Together&body=Hey%20Arthur,%20I%20saw%20your%20portfolio%20and...",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Email Me
          </button>
          <button
            onClick={() =>
              window.open(
                "/projects/Arthur Weale_Resume-Junior Software Developer.pdf",
              )
            }
          >
            Resume
          </button>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/Arthur-Weale"
            target="_blank"
            rel="noreferrer"
            aria-label="Arthur Weale GitHub profile"
          >
            <SiGithub />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/arthur-weale"
            target="_blank"
            rel="noreferrer"
            aria-label="Arthur Weale LinkedIn profile"
          >
            <SiLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
