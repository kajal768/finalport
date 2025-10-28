import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © {new Date().getFullYear()} <strong>Kajal Rajput</strong> | Built with ❤️ at <strong>MakeStudy</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
