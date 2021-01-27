import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShareIcon from "@material-ui/icons/Share";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <li className="product-item">
      <Card className="product-item__content">
        <div className="product-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="product-item__info">
          <h2 className="product-item__title">{props.title}</h2>
          <h3 className="product-item__price">{props.price}</h3>
          <p>{props.description}</p>
        </div>
        <div className="product-item__actions">
          <Button inverse to={`/products/${props.id}`}>
            VER
          </Button>
          <Button to={`/products/${props.id}`}>COMPRAR</Button>
        </div>
      </Card>
    </li>
  );
}

const CatalogProductItem = (props) => {
  const [productVisible, setProducVisible] = useState(false);
  const viewProductHandler = (event) => {
    event.preventDefault();
    setProducVisible(prev => !prev);
  };
  return (
    <li className={ !productVisible ? "catalog-item" : "catalog-item__clicked"} >
      <Card className="catalog-item__content">
        <h2 className="catalog-item__title">{props.title}</h2>
        <div className="catalog-item__viewIcon">
          <VisibilityIcon onClick={viewProductHandler} />
        </div>
        <div className="catalog-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="catalog-item__info">
          <h3 className="catalog-item__price">{props.price}</h3>
          <p>{props.description}</p>
        </div>
        <div className="catalog-item__actions">
          <AddShoppingCartIcon />
          <ShareIcon />
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

export { CatalogProductItem };
