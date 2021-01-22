import React from "react";
import { Link } from "react-router-dom";

// import local modules
import Card from "../../shared/components/UIElements/Card";

//import styles
import "./CatalogNavigation.css";


const CatalogNavigation = (props) => {


  return (

    props.categories.map(cat => <li className="cat-nav-links">
    
    <Link onClick={props.onClick} id={cat} to={`/catalogo/${cat}`} exact>
        {cat}
      </Link>
    </li>)
  );
};

export default CatalogNavigation;
