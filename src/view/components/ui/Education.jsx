function Education() {
  const coursework = [
    "Python",
    "C# / .NET",
    "JavaScript",
    "React",
    "Data Structures",
    "Algorithms",
    "The Odin Project",
  ];

  return (
    <section id="education" className="education">
      <div className="subheading-container">
        <h2 className="education-header">Education</h2>
      </div>

      <div className="education-section">
        <div className="education-item">
          <p className="education-label">Current studies</p>
          <h3>Bachelor&apos;s Degree in Software Development</h3>
          <p>
            I am currently studying through BYU-Pathway Worldwide with Brigham
            Young University - Idaho, continuing to build my software
            development foundation through practical projects, problem solving,
            and modern development tools.
          </p>
        </div>

        <div className="education-item">
          <p className="education-label">Completed</p>
          <h3>Associate Degree in Software Development</h3>
          <p>
            I hold an associate degree in software development, where I worked
            with Python, some C# and .NET, JavaScript, React, data structures,
            and algorithms.
          </p>
        </div>

        <div className="education-item">
          <p className="education-label">Self-directed learning</p>
          <h3>The Odin Project</h3>
          <p>
            Alongside university, I have also grown through The Odin Project,
            strengthening my full-stack web development skills and learning by
            building.
          </p>
        </div>

        <div className="education-tools" aria-label="Education skills">
          {coursework.map((item) => (
            <span className="education-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
