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
  const [productVisible, setProductVisible] = useState(false);
  const [productHighlight, setProductHighlight] = useState(false);
  const [actionVisible, setActionVisible] = useState(false);
  const viewProductHandler = (event) => {
    event.preventDefault();
    setProductVisible((prev) => !prev);
    setProductHighlight(false);
  };

  const expandActions = () => {
    setActionVisible((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setProductHighlight(true);
  };
  const handleMouseLeave = () => {
    setProductHighlight(false);
    setProductVisible(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={!productVisible ? "catalog-item" : "catalog-item__clicked"}
    >
      <Card
        className={
          !productHighlight
            ? "catalog-item__content"
            : "highlight-catalog-item__content"
        }
      >
        <h2 className="catalog-item__title">{props.title}</h2>
        {productHighlight && (
          <div onClick={viewProductHandler} className="catalog-item__viewIcon">
            <p>Ver Prenda</p>
          </div>
        )}
        <div className="catalog-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        {productVisible && (
          <div className="catalog-item__info">
            <p className="catalog-item__desc">{props.description}</p>
            <p className="catalog-item__desc">Tallas: S, M, L, XL </p>
            <h3 className="catalog-item__price">{`Precio: ${props.price} IVA inc.`}</h3>
          </div>
        )}
        <div className="catalog-item__actions">
          {!productVisible && (
            <div className="catalog-item-view">
              <Button onClick={viewProductHandler}>Ver Prenda</Button>
            </div>
          )}

          {productVisible && (
            <div className="catalog-item-more">
              <AddShoppingCartIcon />
              <ShareIcon />
            </div>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

export { CatalogProductItem };
