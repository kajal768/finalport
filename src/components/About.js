import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { Code, Briefcase, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-header">
          <h2>
            About <span>Me</span>
          </h2>
          <p className="tagline">A blend of creativity, logic, and code 💻</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I’m <strong>Kajal Rajput</strong>, a passionate{" "}
              <strong>Full Stack Web Developer</strong> currently working at{" "}
              <span>Makestudy</span> as an <strong>Assistant Web Developer</strong>.
            </p>
            <p>
              I specialize in building modern, responsive, and scalable web
              applications using technologies like{" "}
              <span>PHP</span>, <span>SQL</span>, <span>HTML</span>,{" "}
              <span>CSS</span>, <span>JavaScript</span>, <span>Bootstrap</span>,
              and the <span>MERN Stack (MongoDB, Express, React, Node.js)</span>.
            </p>
            <p>
              With a strong focus on <strong>creativity</strong>,{" "}
              <strong>teamwork</strong>, and <strong>clean design</strong>, I
              love transforming ideas into functional and visually appealing
              digital experiences.
            </p>
            <p>
              My goal is to keep pushing boundaries, explore innovative
              solutions, and deliver quality work that makes a real impact.
            </p>
            <p>
              Welcome to my portfolio — a reflection of my{" "}
              <strong>skills, passion,</strong> and <strong>growth</strong> as a
              developer. 🚀
            </p>
          </div>

          <div className="about-cards">
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Code size={32} />
              <h3>Frontend Magic</h3>
              <p>
                React, Tailwind, Framer Motion, JavaScript, and UI/UX love!
              </p>
            </motion.div>

            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Briefcase size={32} />
              <h3>MakeStudy Work</h3>
              <p>
                Building real-world dashboards, features, and reports for
                clients.
              </p>
            </motion.div>

            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Sparkles size={32} />
              <h3>Personal Projects</h3>
              <p>
                Showcasing creativity through modern web experiments & mini
                tools.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
