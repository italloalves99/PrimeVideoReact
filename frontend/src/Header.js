import "./App.css";
import logo from "./logo.png";
import React from 'react';
import { MdOutlineScreenShare } from 'react-icons/md';
import { FaUserCog } from 'react-icons/fa';

function Header() {
  return (
    <div className="Header">
        <div class="menu">
            <div class="logo">
              <img src={logo} />
                
            </div>
                <div class="menu-itens">
                        <a href="#">Home</a>
                        <a href="#">TV Shows</a>
                        <a href="#">Movies</a>
                        <MdOutlineScreenShare className="headerscren"/>
                        <FaUserCog className="headeruser"/>
                </div>
                
        </div>
    </div>
  );
}

export default Header;
