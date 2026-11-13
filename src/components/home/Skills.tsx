// Skills.tsx
import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

import goIcon from '../../assets/svg/go.svg';
import rustIcon from '../../assets/svg/rust.svg';
import reactIcon from '../../assets/svg/react.svg';
import pythonIcon from '../../assets/svg/python.svg';
import jsIcon from '../../assets/svg/javascript.svg';
import htmlIcon from '../../assets/svg/html.svg';
import cssIcon from '../../assets/svg/css.svg';
import sqlIcon from '../../assets/svg/sql.svg';
import djangoIcon from '../../assets/svg/django.svg';
import tauriIcon from '../../assets/svg/tauri.svg';
import flaskIcon from '../../assets/svg/flask.svg';
import streamlitIcon from '../../assets/svg/streamlit.svg';
import pandasIcon from '../../assets/svg/pandas.svg';
import plotlyIcon from '../../assets/svg/ploty.svg';
import mongoIcon from '../../assets/svg/mongodb.svg';
import mysqlIcon from '../../assets/svg/mysql.svg';
import postgresIcon from '../../assets/svg/postgresql.svg';
import gitIcon from '../../assets/svg/github.svg';
import trelloIcon from '../../assets/svg/trello.svg';
import postmanIcon from '../../assets/svg/postman.svg';
import dockerIcon from '../../assets/svg/docker.svg';

// Skills with an SVG file use `icon`; skills using react-icons use `Icon`.
// If neither is set, a short text badge (`fallback`) is shown.

interface Skill {
  name: string;
  icon?: string;     // imported SVG file
  Icon?: IconType;   // react-icons component
  fallback?: string; // short text shown when there is no icon
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "Go", icon: goIcon },
        { name: "Rust", icon: rustIcon },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "JavaScript", icon: jsIcon },
        { name: "Python", icon: pythonIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.JS", icon: reactIcon },
        { name: "Tauri", icon: tauriIcon },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
        { name: "Plotly", icon: plotlyIcon },
        { name: "Django", icon: djangoIcon },
        { name: "Flask", icon: flaskIcon },
        { name: "Streamlit", icon: streamlitIcon },
        { name: "Pandas", icon: pandasIcon }
      ]
    },
    {
      title: "Databases, Cloud & Tools",
      skills: [
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "TimescaleDB", fallback: "TS" },
        { name: "MySQL", icon: mysqlIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "AWS (S3, SNS)", Icon: FaAws },
        { name: "Docker", icon: dockerIcon },
        { name: "Git/GitHub", icon: gitIcon },
        { name: "Postman", icon: postmanIcon },
        { name: "Trello", icon: trelloIcon }
      ]
    }
  ];

  return (
    <section className="glass-section reveal">
      <h2>My Skills</h2>
      <div className="skills-layout">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-badges">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={skill.name}
                  className="skill-badge"
                  style={{ '--i': sIdx } as CSSProperties}
                >
                  {skill.Icon ? (
                    <skill.Icon className="skill-icon-img" aria-hidden="true" />
                  ) : skill.icon ? (
                    <img src={skill.icon} alt="" className="skill-icon-img" />
                  ) : (
                    <span className="skill-icon-fallback" aria-hidden="true">
                      {skill.fallback}
                    </span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}