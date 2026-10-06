// src/pages/Journey.tsx

export default function Journey() {
  const journeySteps = [
    {
      id: 1,
      category: "Job",
      title: "Full-Stack Developer",
      organization: "Electrosine Technologies",
      date: "Nov 2025 - Present",
      description: [
        <>
          <strong>ESine Desktop Application (React, TypeScript & Tauri):</strong> Architected a cross-platform industrial desktop application using Tauri, React, and TypeScript for offline and portable Electrical Signature Analysis (ESA) and Motor Current Signature Analysis (MCSA). Built high-performance, interactive data visualizations with Plotly to render real-time 3-phase raw electrical waveforms, demodulated currents, and comparative FFT spectrums with selectable fault frequency overlays. Managed sidecar lifecycle processes to communicate with local embedded binaries, designed end-to-end hardware configuration flows, and integrated automated client-side DOCX report generation.
        </>,
        <>
          <strong>Customer Portal Web Application (React, TypeScript & Tailwind CSS):</strong> Single-handedly engineered the entire frontend of the multi-tenant web portal using React, TypeScript, and Tailwind CSS to monitor distributed motor fleets across multiple facilities. Developed modular dashboards and data-dense analytics interfaces utilizing Plotly and Recharts to track 6-hour electrical trends, historical sparklines, and 14-day baseline threshold limits. Integrated comprehensive administrative modules for managing customers, facilities, equipment nameplates, and mechanical power transmission sequences with custom debounce logic and role-based access control.
        </>,
        <>
          <strong>Embedded Diagnostics Engine (Rust & SQLite):</strong> Developed a high-throughput embedded backend in Rust using the Rocket framework to process multi-channel, 10 kHz voltage and current telemetry captures. Engineered core predictive maintenance and digital signal processing (DSP) logic, translating electrical signals into automated fault frequency diagnostics for bearings, gearboxes, belt pulleys, and rotor bars. Managed database schema evolutions through version-controlled SQLx SQLite migrations, structured 16-bit quantized Apache Arrow/Parquet data exports, and implemented background worker services for automated AWS S3 and SNS cloud synchronization.
        </>,
        <>
          <strong>Central Cloud API (Go, Fiber & PostgreSQL/TimescaleDB):</strong> Architected a scalable, multi-tenant central REST API in Go using the Fiber framework to manage device configurations, cloud sync pipelines, and diagnostic event streams. Designed clean domain-driven service layers and handlers for customer provisioning, facility management, device calibration, and dynamic load fault calculations. Streamlined database queries and data ingestion workflows using SQLc, maintaining robust schema migrations across relational tables and time-series hypertables to ensure consistent distributed telemetry storage.
        </>
      ]
    },
    {
      id: 2,
      category: "Internship",
      title: "Data Science Intern",
      organization: "Prodigy InfoTech",
      date: "Sept 2024 - Oct 2024",
      description: [
        "Designed and interpreted bar charts to highlight categorical and continuous features in the Titanic dataset; found 74\% survival among women and children.",
        "Implemented decision tree classifier on Bank Marketing data with 85\% accuracy; key predictors included job type and age.",
        "Analyzed public sentiment from social media, achieving 82\% prediction accuracy on opinion shifts.",
        "Visualized traffic accident hotspots; revealed 70\% due to poor road conditions and 60\% occurring at night."
      ]
    },
    {
      id: 3,
      category: "Education",
      title: "Bachelor of Engineering in Computer Engineering",
      organization: "LDRP Institute of Technology and Research",
      date: "Oct 2021 - May 2025",
      description: [
        "Graduated with a CGPA of 7.58.",
        "Developed strong foundations in software engineering, database management, and full-stack development."
      ]
    },
    {
      id: 4,
      category: "High School",
      title: "11th & 12th Standard",
      organization: "N & K Pandya Himmat Highschool-2",
      date: "", 
      description: [
        "Continued my higher education of 11th & 12th Std in Himmatnagar, S.K., Gujarat."
      ]
    },
    {
      id: 5,
      category: "School",
      title: "Upto 10th Standard",
      organization: "Uma Vidhyalaya",
      date: "", 
      description: [
        "Completed my schooling upto 10th Std in Himmatnagar, S.K., Gujarat."
      ]
    }
  ];

  return (
    <div className="journey-page">
      <section className="journey-section">
        <h2>My Journey</h2>
        <p className="journey-subtitle">Education, Internships, and Professional Experience</p>
        
        <div className="timeline-container">
          {journeySteps.map((step) => (
            <div key={step.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-category">{step.category}</span>
                {step.date && <span className="timeline-date">{step.date}</span>}
                <h3 className="timeline-title">{step.title}</h3>
                <h4 className="timeline-org">{step.organization}</h4>
                <ul className="timeline-desc">
                  {step.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}