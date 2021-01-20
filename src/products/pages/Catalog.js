import React from "react";

import imgTest1 from "../../2020-09-07-094404915.jpg";
import imgTest2 from "../../2020-09-07-095012514.jpg";
import imgTest3 from "../../2020-09-07-095658270.jpg";

import CatalogNavigation from "../components/CatalogNavigation";

//import styles

import "./Catalog.css";

const DUMMY_CATALOG = [
  {
    id: "p1",
    title: "Netflix Chill",
    type: "pijamas",
    category: "pijamas",
    colors: "",
    fabric: "",
    imageUrl: imgTest1,
    price: "$18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p2",
    title: "Gatito",
    type: "blusas",
    category: "blusas",
    colors: "",
    fabric: "",
    imageUrl: imgTest2,
    price: "$20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p3",
    title: "Disney",
    type: "ninos",
    category: "ninos",
    colors: "",
    fabric: "",
    imageUrl: imgTest3,
    price: "$25",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Catalog = () => {
  return (
    <React.Fragment>
    <h1 className="catalog-title">
      Selecciona una categoria para ver productos
    </h1>
      
        <ul className="catalog-item-container">
          {DUMMY_CATALOG.map((product) => {
            return (
              <CatalogNavigation
                key={product.id}
                id={product.id}
                category={product.category}
              />
            );
          })}
        </ul>
      
    </React.Fragment>
  );
};

export default Catalog;
