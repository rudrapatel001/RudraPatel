// Card.tsx
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({ title, description, imageUrl, githubLink, demoLink }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Split description by words
  const words = description.split(' ');
  const isLongDescription = words.length > 25;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate text if it's long and not expanded
  const displayText = isLongDescription && !isExpanded 
    ? words.slice(0, 25).join(' ') + '...' 
    : description;

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <div className="card-description">
        <p>
          {displayText}
          {isLongDescription && (
            <button className="read-more-btn" onClick={toggleDescription}>
              {isExpanded ? ' Read Less' : ' Read More'}
            </button>
          )}
        </p>
      </div>
      <div className="card-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
        )}
        {demoLink && (
           <a href={demoLink} target="_blank" rel="noreferrer" style={{ marginLeft: '15px' }}>Live Demo</a>
        )}
      </div>
    </div>
  );
}