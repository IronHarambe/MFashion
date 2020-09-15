import React from "react";
import "./Product.scss";
import { Button } from "@material-ui/core";
import { useStaeValue } from "../context-api/StateProvider";

function Product({ id, title, image, price, artist }) {
  // Takes the state(basket{destructured})
  // Dispatch, how we're going to manipulate the data layer
  const [{ basket }, dispatch] = useStaeValue();

  console.log(basket);

  const addToBasket = () => {
    // Dispatch(push) item to the data layer
    dispatch({
      // The Action type
      type: "ADD_TO_BASKET",
      // The item we are adding
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        artist: artist,
      },
    });
  };

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
          <Button
            onClick={addToBasket}
            className="btn"
            variant="outlined"
            color="primary"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
