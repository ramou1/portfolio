import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Coluna 1 - Email */}
          <div className="footer-column">
            <h3 className="footer-title">Email</h3>
            <a
              href="mailto:ramonsoliveira1@hotmail.com"
              className="footer-link"
            >
              ramonsoliveira1@hotmail.com
            </a>
          </div>

          {/* Coluna 2 - LinkedIn */}
          <div className="footer-column">
            <h3 className="footer-title">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ramou1/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              linkedin.com/in/ramou1
            </a>
          </div>

          {/* Coluna 3 - GitHub */}
          <div className="footer-column">
            <h3 className="footer-title">GitHub</h3>
            <a
              href="https://github.com/ramou1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              github.com/ramou1
            </a>
          </div>

          {/* Coluna 4 - Behance */}
          <div className="footer-column">
            <h3 className="footer-title">Behance</h3>
            <a
              href="https://www.be.net/ramou"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              be.net/ramou
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} Ramon Oliveira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
