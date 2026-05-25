function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Foundations",
      skills: ["Python", "C# / .NET", "Git", "Data Structures", "Algorithms"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="subheading-container">
        <h2 className="skills-header">Skills</h2>
      </div>

      <div className="skills-section">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
