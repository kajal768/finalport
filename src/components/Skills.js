// src/components/Skills.jsx
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={32} />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "jQuery"],
    },
    {
      title: "Backend Development",
      icon: <Server size={32} />,
      skills: ["Node.js", "Express.js", "PHP"],
    },
    {
      title: "Database & API",
      icon: <Database size={32} />,
      skills: ["MySQL", "MongoDB", "Postman", "RESTful APIs"],
    },
    {
      title: "Core Strengths",
      icon: <Code2 size={32} />,
      skills: ["Clean Code", "UI/UX", "Problem Solving", "Team Collaboration"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="skills-header">
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="tagline">Tools & technologies that empower my code 💪</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
