import React from "react";
import { Link } from "react-router-dom";
import "./undernav.css";

const UnderNav = () => (
  <div>
    <div className="under-content">
      <Link to="/men">
        <u>Men</u>
      </Link>
      <span>/</span>
      <Link to="/">
        <u>Clothing</u>
      </Link>
      <span>/</span>
      <Link to="/">
        <u>Tops</u>
      </Link>
      <span>/</span>
      <Link to="/">
        <u>Adidas</u>
      </Link>
      <span>/</span>
      <Link to="/">Adidas Black T-Shirt</Link>
    </div>
    <hr className="under-hr" />
  </div>
);

export default UnderNav;
