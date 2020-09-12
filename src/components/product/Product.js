import React from "react";
import "./Product.scss";
import { Button } from "@material-ui/core";

function Product({ id, title, image, price, amount, artist }) {
  return (
    <div className="product">
      <div className="product__container">
        <img src={image} alt="" />
        <div className="product__content">
          <div className="product__info">
            <h5>{title}</h5>
            <strong>${price}</strong>
            <p>{artist}</p>
          </div>
          <Button className="btn" variant="outlined" color="primary">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
