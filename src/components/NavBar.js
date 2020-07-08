import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/home" className="nav-item nav-link active">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link to="/newQuestion" className="nav-item nav-link">
            New Question
          </Link>
          <Link to="/DashBoard" className="nav-item nav-link">
            Leader Board
          </Link>
        </div>
      </div>
    </nav>
  );
}
