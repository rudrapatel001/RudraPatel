// src/pages/Journey.tsx

interface ProjectBlock {
  name: string;
  stack: string[];
  points: string[];
}

interface JourneyStep {
  id: number;
  category: string;
  title: string;
  organization: string;
  date?: string;
  summary?: string;
  projects?: ProjectBlock[];
  points?: string[];
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    category: "Job",
    title: "Full-Stack Developer",
    organization: "Electrosine Technologies",
    date: "Nov 2025 - Present",
    summary:
      "Building an industrial motor-diagnostics platform end to end: a desktop app, a customer portal, an embedded diagnostics engine and a cloud API.",
    projects: [
      {
        name: "ESine Desktop Application",
        stack: ["Tauri", "React", "TypeScript", "Plotly"],
        points: [
          "Architected a cross-platform, offline and portable desktop app for Electrical Signature Analysis (ESA) and Motor Current Signature Analysis (MCSA).",
          "Built interactive Plotly visualizations: real-time 3-phase raw waveforms, demodulated currents, and comparative FFT spectrums with selectable fault-frequency overlays.",
          "Managed sidecar processes that talk to local embedded binaries, designed hardware configuration flows, and added client-side DOCX report generation."
        ]
      },
      {
        name: "Customer Portal Web Application",
        stack: ["React", "TypeScript", "Tailwind CSS", "Plotly", "Recharts"],
        points: [
          "Single-handedly built the entire frontend of a multi-tenant portal for monitoring motor fleets across multiple facilities.",
          "Developed data-dense dashboards with 6-hour electrical trends, historical sparklines and 14-day baseline threshold limits.",
          "Integrated admin modules for customers, facilities, equipment nameplates and power transmission sequences, with debounce logic and role-based access control."
        ]
      },
      {
        name: "Embedded Diagnostics Engine",
        stack: ["Rust", "Rocket", "SQLite", "AWS S3 / SNS"],
        points: [
          "Developed a high-throughput embedded backend that processes multi-channel, 10 kHz voltage and current telemetry captures.",
          "Engineered DSP and predictive-maintenance logic that turns electrical signals into automated fault diagnostics for bearings, gearboxes, belt pulleys and rotor bars.",
          "Managed versioned SQLx migrations, 16-bit quantized Apache Arrow/Parquet exports, and background workers for AWS S3 and SNS cloud sync."
        ]
      },
      {
        name: "Central Cloud API",
        stack: ["Go", "Fiber", "PostgreSQL", "TimescaleDB", "SQLc"],
        points: [
          "Architected a scalable, multi-tenant REST API for device configurations, cloud sync pipelines and diagnostic event streams.",
          "Designed domain-driven service layers for customer provisioning, facility management, device calibration and dynamic load fault calculations.",
          "Streamlined queries and ingestion with SQLc, with schema migrations across relational tables and time-series hypertables."
        ]
      }
    ]
  },
  {
    id: 2,
    category: "Internship",
    title: "Data Science Intern",
    organization: "Prodigy InfoTech",
    date: "Sept 2024 - Oct 2024",
    points: [
      "Designed and interpreted bar charts to highlight categorical and continuous features in the Titanic dataset; found 74% survival among women and children.",
      "Implemented decision tree classifier on Bank Marketing data with 85% accuracy; key predictors included job type and age.",
      "Analyzed public sentiment from social media, achieving 82% prediction accuracy on opinion shifts.",
      "Visualized traffic accident hotspots; revealed 70% due to poor road conditions and 60% occurring at night."
    ]
  },
  {
    id: 3,
    category: "Education",
    title: "Bachelor of Engineering in Computer Engineering",
    organization: "LDRP Institute of Technology and Research",
    date: "Oct 2021 - May 2025",
    points: [
      "Graduated with a CGPA of 7.58.",
      "Developed strong foundations in software engineering, database management, and full-stack development."
    ]
  },
  {
    id: 4,
    category: "School",
    title: "Schooling",
    organization: "Himmatnagar, Sabarkantha, Gujarat",
    points: [
      "11th & 12th Std at N & K Pandya Himmat Highschool-2.",
      "Up to 10th Std at Uma Vidhyalaya."
    ]
  }
];

export default function Journey() {
  return (
    <div className="journey-page">
      <section className="journey-section">
        <h2>My Journey</h2>
        <p className="journey-subtitle">Education, Internships, and Professional Experience</p>

        <div className="timeline-container">
          {journeySteps.map((step) => (
            <div key={step.id} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-category">{step.category}</span>
                {step.date && <span className="timeline-date">{step.date}</span>}
                <h3 className="timeline-title">{step.title}</h3>
                <h4 className="timeline-org">{step.organization}</h4>

                {step.summary && <p className="timeline-summary">{step.summary}</p>}

                {step.projects && (
                  <div className="timeline-projects">
                    {step.projects.map((project, idx) => (
                      <details key={project.name} className="timeline-project" open={idx === 0}>
                        <summary>
                          <span className="timeline-project-name">{project.name}</span>
                        </summary>
                        <ul className="tech-tags">
                          {project.stack.map((t) => (
                            <li key={t} className="tag">{t}</li>
                          ))}
                        </ul>
                        <ul className="timeline-desc">
                          {project.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                )}

                {step.points && (
                  <ul className="timeline-desc">
                    {step.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}