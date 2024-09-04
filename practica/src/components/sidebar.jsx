
import React from 'react'
import "../styles/sidebar.css"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </aside>
  )
}
