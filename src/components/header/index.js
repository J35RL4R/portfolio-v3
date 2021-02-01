import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">Jesse R. Larsen</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-item">
            <Link
            to="/"
            className={
            window.location.pathname === "/" || window.location.pathname === "/"
              ? "nav-link active"
              : "nav-link"
          }
            >
            About
            </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
            to="/portfolio"
            className={
            window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link" }
          >
          Portfolio
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default nav;