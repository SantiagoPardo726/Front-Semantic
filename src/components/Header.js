import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://w7.pngwing.com/pngs/475/488/png-transparent-logo-mobile-application-testing-mobile-cloud-computing-mobile-phones-software-testing-portal-logo-text-logo-logo-vector.png" alt="Logo" className="logo-image" />
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item material-icons">
                    <a href="/" className="navbar-link">Inicio</a>
                </li>
                <li className="navbar-item material-icons">
                    <a href="/acerca" className="navbar-link">Acerca</a>
                </li>
                <li className="navbar-item material-icons">
                    <a href="/servicios" className="navbar-link">Servicios</a>
                </li>
                <li className="navbar-item material-icons">
                    <a href="/contacto" className="navbar-link">Contacto</a>
                </li>
            </ul>
            <div className="navbar-user">
                <span className="material-icons">person</span>
                <span className="navbar-divider" />
                <a href="/login" className="navbar-link material-icons">Login</a>
            </div>
        </nav>
    );
}

export default Header;