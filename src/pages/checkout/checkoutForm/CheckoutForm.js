import { Button } from "@material-ui/core";
import React from "react";
import { getBasketTotal } from "../../../components/context-api/reducer";
import { useStaeValue } from "../../../components/context-api/StateProvider";

import "./CheckoutForm.scss";

function CheckoutForm() {
  const [{ basket }] = useStaeValue();

  return (
    <div className="checkout__form">
      <h4>Checkout </h4>
      <h5>{basket.length} items:</h5>
      <p>${getBasketTotal(basket)}</p>
      <Button className="btn">Buy Items</Button>
    </div>
  );
}

export default CheckoutForm;
