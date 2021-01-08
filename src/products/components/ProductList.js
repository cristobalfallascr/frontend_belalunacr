import React from "react";

import Card from "../../shared/components/UIElements/Card";
import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList(props) {
  if (props.items.length === 0) {
    return (
      <div className="product-list center">
        <Card>
          <h2>No Products found. Maybe Create one?</h2>
          <button>Share Product</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="product-list">
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.imageUrl}
          title={product.title}
          description={product.description}
          price={product.price}

        />
      ))}
    </ul>
  );
}

export default ProductList;
