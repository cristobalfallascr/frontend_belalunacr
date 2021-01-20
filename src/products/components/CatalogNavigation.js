import React from "react";
import { Link } from "react-router-dom";

// import local modules
import Card from "../../shared/components/UIElements/Card";

//import styles
import "./CatalogNavigation.css";

const CatalogNavigation = (props) => {
  return (
    <li className="cat-nav-links">
      <Link to={`/catalogo/${props.category}`} exact >{props.category}</Link>
    </li>
  );
};

export default CatalogNavigation;
