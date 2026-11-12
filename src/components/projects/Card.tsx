// Card.tsx
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  tech?: string[];
  githubLink?: string;
  demoLink?: string;
}

const WORD_LIMIT = 25;

export default function ProjectCard({
  title,
  description,
  imageUrl,
  category,
  tech = [],
  githubLink,
  demoLink,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = description.split(' ');
  const isLongDescription = words.length > WORD_LIMIT;

  const displayText =
    isLongDescription && !isExpanded
      ? words.slice(0, WORD_LIMIT).join(' ') + '...'
      : description;

  return (
    <article className={`project-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-media">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>

      <div className="card-body">
        {category && <span className="card-category">{category}</span>}
        <h3>{title}</h3>

        <div className="card-description">
          <p>
            {displayText}
            {isLongDescription && (
              <button
                type="button"
                className="read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? ' Read Less' : ' Read More'}
              </button>
            )}
          </p>
        </div>

        {tech.length > 0 && (
          <ul className="tech-tags">
            {tech.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        )}

        <div className="card-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="card-link-btn">
              <FaGithub size={16} />
              GitHub
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer" className="card-link-btn card-link-primary">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}