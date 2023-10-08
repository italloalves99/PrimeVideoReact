import "./App.css";
import logo from "./logo.png";
import React from 'react';

function Header() {
  return (
    <div className="Header">
        <div class="menu">
            <div class="logo">
              <img src={logo} />
                
            </div>
                <div class="menu-itens">
                        <a href="#">Filmes</a>
                        <a href="#">Séries</a>
                        <a href="#">Esportes</a>
                </div>
                
        </div>
    </div>
  );
}

export default Header;
