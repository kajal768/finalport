import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section highlight logic
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          Kajal<span>Rajput</span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
