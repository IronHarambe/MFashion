import React from "react";
import "./Product.scss";

function Product({ id, title, image, price, amount, artist }) {
  return (
    <div className="product">
      <div className="product__container">
        <img src={image} alt="" />
        <div className="product__content">
          <div className="product__info">
            <p>{title}</p>
            <p>${price}</p>
            <p>{artist}</p>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
