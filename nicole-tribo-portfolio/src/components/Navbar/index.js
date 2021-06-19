import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <NavLink
            to="/"
            style={{ color: 'black' }}
            className= { 
            window.location.pathname === "/" || window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
            }
          >
          About
          </NavLink>
        </div>
        <div className="navbar-item">
        <NavLink
            to="/portfolio"
            style={{ color: 'black' }}
            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
          </NavLink>
        </div>
        <div className="navbar-item">
        <NavLink
            to="/contact"
            style={{ color: 'black' }}
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Contact
        </NavLink>
        </div>
        </div>
      </div>
    </nav>
    <section id="navbarBasicExample" className="hero is-small">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            Nicole Tribo
            </p>
            <p className="subtitle">
              Welcome to my portfolio!
            </p>
        </div>
      </div>
    </section>
    </div>
    
  );
}
export default Navbar;
