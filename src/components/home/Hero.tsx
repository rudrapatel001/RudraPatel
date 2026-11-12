import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profImg from '../../assets/img/prof.jpg';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            Currently building at Electrosine Technologies
          </span>

          <h1>Hi, I'm <span>Rudra Patel</span></h1>
          <h2>Full-Stack Developer</h2>
          <p className="hero-stack">Rust · Go · React · Tauri · Data Science</p>
          <p className="hero-desc">
            Building scalable cloud backends and modern frontends with a passion for data.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/journey" className="btn btn-secondary">My Journey</Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/rudrapatel001" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rudrapatel7042004/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:rudra7042004@gmail.com" aria-label="Email" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={profImg} alt="Rudra Patel" />
        </div>
      </div>
    </section>
  );
}