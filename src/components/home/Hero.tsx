import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section">
      <h1>Hi, I'm <span>Rudra Patel</span></h1>
      <h2>Full-Stack Developer & Data Science Enthusiast</h2>
      <p>Building scalable cloud backends and modern frontends with a passion for data.</p>
      <div className="hero-buttons">
        <Link to="/projects" className="btn btn-primary">View Projects</Link>
        <Link to="/journey" className="btn btn-secondary">My Journey</Link>
      </div>
    </section>
  );
}