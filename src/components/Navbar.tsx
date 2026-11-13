// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Download, Home, FolderKanban, Route, Sun, Moon } from 'lucide-react';
import resumePdf from '../assets/Resume/RudraPatel.pdf';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <nav className={isVisible ? '' : 'nav-hidden'}>
      <h2>RudraPatel.</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end aria-label="Home" title="Home">
            <Home size={22} className="nav-icon" />
            <span className="nav-label">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" aria-label="Projects" title="Projects">
            <FolderKanban size={22} className="nav-icon" />
            <span className="nav-label">Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/journey" aria-label="Journey" title="Journey">
            <Route size={22} className="nav-icon" />
            <span className="nav-label">Journey</span>
          </NavLink>
        </li>
        <li>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
            aria-label="Download CV"
            title="Download CV"
          >
            <Download size={18} className="nav-resume-icon" />
            <span className="nav-label">Download CV</span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            <span key={theme} className="theme-icon">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}