import React from "react";
import { useStaeValue } from "../../../components/context-api/StateProvider";
import "./CheckoutProduct.scss";

function CheckoutProduct({ id, title, price, image }) {
  const [{ basket }, dispatch] = useStaeValue();
  

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__product">
      {/* <h1>{basket.length}</h1> */}
      <img src={image} alt="" />
      <div className="checkout__content">
        <h4>{title}</h4>
        <strong>${price}</strong>
      </div>

      <button className="remove__button" onClick={removeFromBasket}>
        Remove From Basket
      </button>
    </div>
  );
}

export default CheckoutProduct;
