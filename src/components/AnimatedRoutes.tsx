// src/components/AnimatedRoutes.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Projects from '../pages/Projects.tsx';
import Journey from '../pages/Journey.tsx';

// The wrapper is re-created on every route change (via `key`), which
// replays the CSS "page-transition" animation for each new page.
export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </div>
  );
}