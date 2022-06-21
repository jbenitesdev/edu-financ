import React from "react";
import './Menu.css'
import IMGLOGO from '../assets/images/logo.svg';

const Menu: React.FC = () => {
  return <div className="Menu ">
      <nav className="navbar navbar-expand-sm navbar-dark ">
        <div className="container">
        <a 
            href="#" 
            className="navbar-brand h1">
                <img 
                    src={IMGLOGO} 
                    className="d-inline-block align-top"
                />
        </a>
        <button 
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            className="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
        >
            <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="#" className="nav-link text-white active">
                        Home
                    </a>
                </li>
                <li className="nav-item active">
                    <a href="#" className="text-white nav-link">
                        Sobre
                    </a>
                </li>
                <li className="nav-item active">
                    <a href="#" className="text-white nav-link">
                        Contato
                    </a>
                </li>
            </ul>            
            
        </div>
        </div>
    </nav>
    
  </div>;
};

export default Menu;
