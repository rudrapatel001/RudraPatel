// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import resumePdf from '../assets/img/RudraPatel.pdf';

export default function Navbar() {
  return (
    <nav>
      <h2>RudraPatel.</h2>
      
      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/journey">Journey</Link></li>
        <li>
          <a href={resumePdf} target="_blank" rel="noreferrer" className="nav-resume-btn">
            <Download size={18} />
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
}