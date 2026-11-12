import { useState } from 'react';
import ProjectCard from '../components/projects/Card';
import expenseImage from "../assets/img/vaulttrack.jpeg";
import handImage from "../assets/img/hand_gesture.png";
import houseImage from "../assets/img/house_price_prediction.jpg";
import faceImage from "../assets/img/face.jpg";
import otakuImage from "../assets/img/otaku.png";
import retroImage from "../assets/img/RetroToons.png";
import jaykoImage from "../assets/img/jayko.png";
import anonymousImage from "../assets/img/AFB.png";
import sentimentImage from "../assets/img/sentiment analysis.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  tech: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Ordered on purpose: strongest / most relevant work first.
  const myProjects: Project[] = [
    {
      id: 8,
      title: "Jayko Quartz Sinks",
      description: "Delivered a modern, responsive product catalog and digital showroom as a freelance project for an international quartz sink manufacturer. Built with React, TypeScript, Tailwind CSS, and Vite, the platform features interactive material visualizers, dual-unit technical specification tables, custom scroll-reveal animations, and seamless Amazon marketplace integration.",
      imageUrl: jaykoImage,
      category: "Frontend",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      demoLink: "https://jayko.vercel.app/"
    },
    {
      id: 5,
      title: "Anonymous Feedback",
      description: "The Anonymous Feedback Platform is a secure web application designed for collecting and sharing anonymous feedback. Users can create profiles, distribute feedback forms, and receive responses while keeping their identities private. The platform is built with Next.js, styled using Tailwind CSS, and leverages MongoDB for database management. TypeScript ensures robust code quality, while NextAuth.js handles secure authentication.",
      imageUrl: anonymousImage,
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth.js"],
      githubLink: "https://github.com/rudrapatel001/anonymous-feedback",
    },
    {
      id: 10,
      title: "TaskMaster",
      description: "TaskMaster is a work-in-progress, full-stack project management app built with React, TypeScript, Go, and PostgreSQL. Its authentication system uses bcrypt (cost 12), short-lived HS256 JWT access tokens, and 256-bit refresh tokens stored only as SHA-256 hashes. Refresh tokens rotate on use, with reuse detection to revoke a user’s sessions; the HttpOnly, SameSite=Strict cookie also uses Secure in production. Workspace access is enforced through membership-based RBAC, with permissions checked server-side and project data scoped to its workspace. The API adds per-client rate limits, strict JSON decoding, input validation, request IDs, structured logging, and panic recovery. PostgreSQL migrations and relational constraints support the data model, while the Go backend separates HTTP handlers, services, and repositories.",
      category: "Full Stack",
      tech: ["React", "TypeScript", "Go", "PostgreSQL", "chi", "pgx", "JWT", "bcrypt", "Tailwind CSS"],
      githubLink: "https://github.com/rudrapatel001/TaskMaster",
    },
    {
      id: 1,
      title: "Expense Tracker Web Application",
      description: "Designed a full-stack expense management system with user authentication and CRUD functionality. Utilized PostgreSQL for data storage and Django ORM for monthly and yearly expense summaries.",
      imageUrl: expenseImage,
      category: "Full Stack",
      tech: ["Django", "PostgreSQL", "Python"],
      githubLink: "https://github.com/rudrapatel001/VaultTrack---Expense-Tracker-",
    },
    {
      id: 7,
      title: "Retro Toons",
      description: "RetroToons is a nostalgic platform that invites users to revisit their favorite cartoons from childhood while fostering a sense of community among enthusiasts. The website features a vibrant home page where cherished memories come alive, alongside a gallery showcasing beloved classics like Pokémon and SpongeBob SquarePants. Users can explore iconic cartoons from various decades, spanning from the '80s to the 2000s, and participate in a fun quiz to discover which cartoon character they resemble the most. Additionally, the blog section offers insightful articles about legendary shows.",
      imageUrl: retroImage,
      category: "Frontend",
      tech: ["HTML", "CSS", "JavaScript"], // verify this matches your actual stack
      demoLink: "https://rudrapatel001.github.io/RetroToons/",
      githubLink: "https://github.com/rudrapatel001/RetroToons"
    },
    {
      id: 6,
      title: "Otaku Gallery | Wallpaper Website",
      description: "Developed a dynamic anime wallpaper website using HTML, CSS, and vanilla JavaScript. This project allows users to browse and download high-quality anime wallpapers. It features an intuitive interface, responsive design, and functionality to preview images in full screen. This project showcases my skills in front-end development and user experience design.",
      imageUrl: otakuImage,
      category: "Frontend",
      tech: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://otaku-gallery-rp.netlify.app/"
    },
    {
      id: 2,
      title: "Hand Gesture Recognition System",
      description: "Implemented a real-time hand gesture recognition system achieving 97% accuracy using Python, OpenCV, and MediaPipe. Created an interactive web interface using Streamlit.",
      imageUrl: handImage,
      category: "Data Science",
      tech: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
      githubLink: "https://github.com/rudrapatel001/Hand-Gesture-Recognition-System",
    },
    {
      id: 4,
      title: "Facial Recognition with Attendance",
      description: "Engineered a real-time face recognition system with 90%+ accuracy using Python, Tkinter GUI, and OpenCV. Integrated a MySQL database to automatically log attendance timestamps.",
      imageUrl: faceImage,
      category: "Data Science",
      tech: ["Python", "OpenCV", "Tkinter", "MySQL"],
      githubLink: "https://github.com/rudrapatel001/face_recognotion_system",
    },
    {
      id: 3,
      title: "House Price Prediction",
      description: "Developed a house price prediction system using Python, Flask, and Scikit-Learn with 85%+ accuracy. Benchmarked regression models and utilized Pandas and Seaborn for data pre-processing.",
      imageUrl: houseImage,
      category: "Data Science",
      tech: ["Python", "Flask", "Scikit-Learn", "Pandas", "Seaborn"],
      githubLink: "https://github.com/rudrapatel001/House_Price_Prediction",
    },
    {
      id: 9,
      title: "Sentimental Analysis",
      description: "This project analyzes text sentiment and emotions using Python, NLP, and tweet extraction. It preprocesses text, detects emotions via a predefined lexicon, and uses the VADER model for sentiment analysis. Tweets are fetched with GetOldTweets3, and results are visualized with matplotlib. The project utilizes Python, NLTK, GetOldTweets3, and matplotlib for insights into sentiment and emotions in text data.",
      imageUrl: sentimentImage,
      category: "Data Science",
      tech: ["Python", "NLTK", "VADER", "Matplotlib"],
      githubLink: "https://github.com/rudrapatel001/Sentiment-Analysis"
    }
  ];

  const categories = ["All", "Frontend", "Full Stack", "Data Science"];

  const countFor = (category: string) =>
    category === "All"
      ? myProjects.length
      : myProjects.filter((p) => p.category === category).length;

  const filteredProjects =
    activeFilter === "All"
      ? myProjects
      : myProjects.filter((proj) => proj.category === activeFilter);

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <p className="page-subtitle">Things I've built, from freelance work to experiments</p>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category} <span className="filter-count">{countFor(category)}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            description={proj.description}
            imageUrl={proj.imageUrl}
            category={proj.category}
            tech={proj.tech}
            githubLink={proj.githubLink}
            demoLink={proj.demoLink}
          />
        ))}
      </div>
    </div>
  );
}
