import React from 'react';
import '../css/Menu.css';

function Menu() {
  return (
    <nav>
      <div className="logo-box">
        <h1>Junqueira's Portfolio</h1>
      </div>
      <div className="menu-list-box">
        <ul>
          <a href="#projetos"><li>Projetos</li></a>
          <a href="#about"><li>Sobre Mim</li></a>
          <a href="#skills"><li>Habilidades</li></a>
          <a href="#contact"><li>Contato</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;
