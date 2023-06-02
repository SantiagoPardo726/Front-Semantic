import React, { useContext } from "react";
import "../styles/header.css";

import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const context = useContext(AuthContext);
  const username = context.user;
  return (
    <nav className="navbar">
      <a href="/">
      <div className="navbar-logo" >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/moviles2023-c0911.appspot.com/o/images%2FlogoSW.png?alt=media&token=28386e87-abd8-4fca-bccb-f41a2e732dc6&_gl=1*4f0mc3*_ga*NTI4Mjc5OTcyLjE2Nzk3MDEzMjM.*_ga_CW55HF8NVT*MTY4NTY5MDE3OC4xNS4xLjE2ODU2OTAyNDcuMC4wLjA."
          alt="Logo"
          className="logo-image"
        />
      </div>
      </a>
      <ul className="navbar-menu">
        <li className="navbar-item material-icons">
          <a href="/" className="navbar-link">
            Inicio
          </a>
        </li>
        <li className="navbar-item material-icons">
          <a href="/create-course" className="navbar-link">
            Crear Curso
          </a>
        </li>
        <li className="navbar-item material-icons">
          <a href="/recomendations" className="navbar-link">
            Recomendaciones
          </a>
        </li>
        <li className="navbar-item material-icons">
          <a href="/create-course" className="navbar-link">
            Grafo
          </a>
        </li>
      </ul>

      <div className="navbar-user">
        <span className="material-icons">{username}</span>
        <span className="navbar-divider" />
        <a href="/login" className="navbar-link material-icons">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
