// About.tsx
import profImg from '../../assets/img/prof.jpg';

export default function About() {
  return (
    <section className="glass-section about-section">
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
        <div className="about-image">
          <img src={profImg} alt="Rudra Patel" />
        </div>
      </div>
    </section>
  );
}