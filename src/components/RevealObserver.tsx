import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal:not(.visible)');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}