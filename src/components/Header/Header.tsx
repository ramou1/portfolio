import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImage from "../../assets/images/logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Menu Hambúrguer para Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>projetos</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>sobre</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;