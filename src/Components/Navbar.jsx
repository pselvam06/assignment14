import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
      <Link
        className="navbar-brand"
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        TechStore
      </Link>
      <ul className="navbar-nav gap-3 p-2  d-flex justify-content-end">
        <li className="nav-item ">
          <Link to="/" style={{ color: "white", textDecoration: "none" }} > Home </Link>
        </li>
        <li className="nav-item ">
          <Link to="/products" style={{ color: "white", textDecoration: "none" }} > Products </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
