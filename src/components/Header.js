import React, { useContext } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Header = () => {
    const context = useContext(AuthContext);
    const username = context.user;
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://w7.pngwing.com/pngs/475/488/png-transparent-logo-mobile-application-testing-mobile-cloud-computing-mobile-phones-software-testing-portal-logo-text-logo-logo-vector.png" alt="Logo" className="logo-image" />
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item material-icons">
                    <a href="/home" className="navbar-link">Inicio</a>
                </li>
                <li className="navbar-item material-icons">
                    <a href="/acerca" className="navbar-link">Crear Curso</a>
                </li>
                <li className="navbar-item material-icons">
                    <a href="/servicios" className="navbar-link">Recomandaciones</a>
                </li>
                <li className="navbar-item material-icons">

              
                <a href="/create-course" className="navbar-link">Crear Curso</a>
               
                </li>

          

            </ul>
           
            <div className="navbar-user">
                <span className="material-icons">{username}</span>
                <span className="navbar-divider" />
                <a href="/login" className="navbar-link material-icons">Login</a>
            </div>
        </nav>
    );
}

export default Header;