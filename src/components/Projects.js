import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { Globe, Database, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Dashboard",
      icon: <Globe size={30} />,
      desc: "A responsive dashboard built for MakeStudy — showing visa, LOA & offer reports with live charts.",
      tech: ["React", "PHP", "MySQL", "Chart.js"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      icon: <Code size={30} />,
      desc: "My personal portfolio (this one!) showcasing skills, animations, and projects with Framer Motion.",
      tech: ["React", "Framer Motion", "CSS3"],
      link: "#",
    },
    {
      title: "College Finder Tool",
      icon: <Database size={30} />,
      desc: "Web app to search colleges and programs with API-based filtering and bookmarking feature.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="projects-header">
          <h2>
            My <span>Projects</span>
          </h2>
          <p className="tagline">
            A showcase of my professional & personal development work 🚀
          </p>
        </div>

        <div className="project-grid">
          {projects.map((proj, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="project-icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <ul className="tech-list">
                {proj.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <a href={proj.link} className="btn-outline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
