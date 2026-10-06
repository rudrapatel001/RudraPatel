import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h3>RudraPatel.</h3>
          <p>Building scalable cloud backends and modern frontends.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/journey">Journey</Link></li>
          </ul>
        </div>
        
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/rudrapatel001" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rudrapatel7042004/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rudra7042004@gmail.com" 
              target="_blank" 
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rudra Patel. All rights reserved.</p>
      </div>
    </footer>
  );
}