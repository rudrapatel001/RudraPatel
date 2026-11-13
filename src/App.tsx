import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import RevealObserver from './components/RevealObserver.tsx';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';

function App() {
  return (
    <Router basename="/RudraPatel/">
      <ScrollToTop />
      <RevealObserver />
      <div className="app-container">
        <Navbar />
        <main>
          <AnimatedRoutes /> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;