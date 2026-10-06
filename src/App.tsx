import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Journey from './pages/Journey.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <Router basename="/RudraPatel/">
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;