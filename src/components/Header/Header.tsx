import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Sempre começa com o tema claro
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [actionPending, setActionPending] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const requestThemeChange = () => {
    setActionPending("theme");
    setConfirmationOpen(true);
  };

  const confirmAction = () => {
    if (actionPending === "theme") {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      
      // Atualizar o tema no corpo do documento
      if (newDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
    
    // Resetar estado
    setConfirmationOpen(false);
    setActionPending(null);
  };

  const cancelAction = () => {
    setConfirmationOpen(false);
    setActionPending(null);
  };

  // Determinar qual logo usar com base no modo atual
  const currentLogo = darkMode ? logoDark : logoLight;

  return (
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={currentLogo} alt="Logotipo do site escrito Ramon" className="logo" />
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
            <li className="theme-toggle">
              <button onClick={requestThemeChange} className="theme-button">
                {darkMode ? "☀️ light mode" : "🌙 dark mode"}
              </button>
            </li>
          </ul>
        </nav>

        {/* Modal de Confirmação */}
        {confirmationOpen && (
          <div className="confirmation-modal">
            <div className="confirmation-content">
              <p>deseja alterar para o {darkMode ? "modo claro" : "modo escuro"}?</p>
              <div className="confirmation-buttons">
                <button onClick={confirmAction} className="confirm-button">confirmar</button>
                <button onClick={cancelAction} className="cancel-button">cancelar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;