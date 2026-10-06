// Skills.tsx

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

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Go", icon: goIcon }, 
        { name: "Rust", icon: rustIcon },
        { name: "Python", icon: pythonIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "SQL", icon: sqlIcon }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.JS", icon: reactIcon },
        { name: "Tauri", icon: tauriIcon },
        { name: "Django", icon: djangoIcon },
        { name: "Flask", icon: flaskIcon },
        { name: "Streamlit", icon: streamlitIcon },
        { name: "Pandas", icon: pandasIcon },
        { name: "Plotly", icon: plotlyIcon }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "Git/GitHub", icon: gitIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Postman", icon: postmanIcon },
        { name: "Trello", icon: trelloIcon }
      ]
    }
  ];

  return (
    <section className="glass-section">
      <h2>My Skills</h2>
      <div className="skills-layout">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-badges">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-badge">
                  <img 
                    src={skill.icon} 
                    alt={'icon'} 
                    className="skill-icon-img" 
                  />
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