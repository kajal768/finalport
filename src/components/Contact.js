// src/components/Contact.jsx
import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Youtube,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-header">
          <h2>
            Get in <span>Touch</span>
          </h2>
          <p className="tagline">
            I'd love to hear from you — whether it's a project idea, collaboration, or just a hello 👋
          </p>
        </div>

        <div className="contact-content">
          {/* Left Info Section */}
          <div className="contact-info">
            <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
              <Mail size={28} className="icon" />
              <h3>Email</h3>
              <p>kajal097856kumari@gmail.com</p>
            </motion.div>

            <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
              <Phone size={28} className="icon" />
              <h3>Phone</h3>
              <p>+91 87259 74501</p>
            </motion.div>

            <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
              <MapPin size={28} className="icon" />
              <h3>Location</h3>
              <p>India</p>
            </motion.div>
          </div>

          {/* Right Form Section */}
          <motion.form
            className="contact-form"
            whileHover={{ scale: 1.02 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <motion.button
              className="send-btn"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Send Message <Send size={18} />
            </motion.button>

            {/* 👇 Socials Section Below Form */}
            <motion.div
              className="after-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4>Let’s Connect 🤝</h4>
              <p>
                Feel free to reach out through my socials below — I’m always open for creative collaborations!
              </p>

              <div className="after-form-icons">
                <a
                  href="https://www.linkedin.com/in/kajal-rajput-43abb62a8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="aicon" />
                </a>
                <a
                  href="https://github.com/kajal768"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="aicon" />
                </a>
                <a
                  href="https://www.youtube.com/@DevoCrop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="aicon" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="aicon" />
                </a>
              </div>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
