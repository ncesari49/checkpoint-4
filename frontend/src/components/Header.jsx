import React from "react";
import { NavLink } from "react-router-dom";
import "@assets/styles/Header.css";

function Header() {
  return (
    <header>
      <div className="nav">
        <NavLink to="/">
          <h1> LOGO</h1>
        </NavLink>
        <NavLink to="/company">
          <h2>Entreprises</h2>
        </NavLink>
        <NavLink to="/product">
          <h2>Produits</h2>
        </NavLink>
      </div>
      <div className="admin">
        <NavLink to="/admin">
          <h2>Admin</h2>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
