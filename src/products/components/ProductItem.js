import React from "react";

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
          <Button inverse to={`/products/${props.id}`}>VER</Button>
          <Button to={`/products/${props.id}`}>COMPRAR</Button>

        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
