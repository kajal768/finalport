import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-overlay"></div>

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home-title">
          Hi, I'm <span>Kajal Rajput</span>
        </h1>

        <motion.h2
          className="home-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Full Stack Web Developer 💻
        </motion.h2>

        <motion.p
          className="home-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Hi, I’m <strong>Kajal Rajput</strong> — a <strong>Full Stack Web Developer</strong> 
          who loves turning ideas into beautiful, functional web experiences. 🚀
        </motion.p>

        <motion.div
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#projects" className="btn-primary">🚀 View My Work</a>
          <a href="#contact" className="btn-outline">📩 Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
