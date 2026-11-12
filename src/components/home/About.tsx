// About.tsx
export default function About() {
  const facts = [
    { label: "Role", value: "Full-Stack Developer at Electrosine Technologies" },
    { label: "Education", value: "B.E. Computer Engineering, LDRP-ITR" },
    { label: "Focus", value: "ReactJS · TypeScript · Node.js · Go · Rust · PostgreSQL · Docker" },
    { label: "Based in", value: "Gujarat, India" },
  ];

  return (
    <section className="glass-section about-section reveal">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a Full-Stack Developer with a Bachelor of Engineering in Computer Engineering from LDRP Institute of Technology and Research.
            Currently working at Electrosine Technologies, I specialize in building scalable cloud backends using Go and Rust, and managing distributed diagnostic data.
            I enjoy debugging complex systems and collaborating on multi-tenant web portals and cross-platform desktop applications using React and Tauri.
            My experience also extends to data science, where I have worked on machine learning classifiers and data visualization.
          </p>
        </div>

        <dl className="about-facts">
          {facts.map((fact) => (
            <div key={fact.label} className="about-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}