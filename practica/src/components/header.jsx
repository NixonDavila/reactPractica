import React from "react";
import "../styles/header.css"; // Importa el archivo CSS para el header

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>Mi Aplicación</h1> {/* Título o logotipo */}
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

