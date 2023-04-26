import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header id="start">
      <nav id="nav" className="nav">
        <a href="#start">Inicio</a>
        <a href="#aboutme">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#experience">Experiencia</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
