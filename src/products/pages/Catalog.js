import React, { useState } from "react";

import imgTest1 from "../../2020-09-07-094404915.jpg";
import imgTest2 from "../../2020-09-07-095012514.jpg";
import imgTest3 from "../../2020-09-07-095658270.jpg";

import CatalogNavigation from "../components/CatalogNavigation";
import ProductList from "../components/ProductList";
import { CatalogProductItem } from "../components/ProductItem";

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
  ,
  {
    id: "p4",
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
    id: "p5",
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
  ,
  {
    id: "p6",
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
  ,
  {
    id: "p7",
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
];

const catalogCategories = ["hombre", "mujer", "ninos", "blusas"];

const Catalog = () => {
  const [showCategory, setShowCategory] = useState("mujer");
  const filterCatalog = (event) => {
    setShowCategory(event.target.id);
  };
  return (
    <React.Fragment>
      <div className="catalog-headers">
        <h2 className="catalog-title">
          Categoría:
        </h2>

        <ul className="catalog-item-container">
          <CatalogNavigation
            categories={catalogCategories}
            onClick={filterCatalog}
          />
        </ul>
      </div>

      <div className="main-container">
        <div class="catalog-product-filters-container">
          <h2> Filtros</h2>
          <p>Precio</p>
          <p>Colores</p>
          <p> Estampados</p>
          <p> Lisos</p>
          <p> Otros</p>
        </div>

        <div class="catalog-product-container">
          <ProductList
            listing="catalog"
            items={DUMMY_CATALOG}
            filter={showCategory}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Catalog;
