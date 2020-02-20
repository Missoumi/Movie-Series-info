import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import imdb_logo from "../images/imdb-logo.png";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <h2>MovieSeriesInfo</h2>
        <a href='https://www.imdb.com'>
          <img className="img-fluid " src={imdb_logo} alt="imdb-logo" />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
