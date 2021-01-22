import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

import { Fade } from "@material-ui/core";

import "./NavLinks.css";

const NavLinks = (props) => {
  const [linkVisibility, setLinkVisibility] = useState(false);

  const handleMouseOver = () => {
    setLinkVisibility((prev) => !prev);
  };
  const handleMouseLeave = () => {
    setLinkVisibility((prev) => !prev);
  };
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/catalogo" exact>
          Catálogo
        </NavLink>
      </li>
      <li>
        <NavLink to="/promociones"> Promociones</NavLink>
      </li>
      <li>
        <NavLink to="/user/pedidos"> Mis Pedidos</NavLink>
      </li>

      <li onMouseEnter={handleMouseOver} onMouseLeave ={handleMouseLeave}>
        <NavLink to="/acceder">
          <PersonIcon className="centered-aligment" />
          {linkVisibility && "Acceder"}{" "}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
