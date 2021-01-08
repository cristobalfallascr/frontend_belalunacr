import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
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

      <li>
        <NavLink to="/acceder"> Acceder</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
