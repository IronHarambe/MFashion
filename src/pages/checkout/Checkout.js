import React from "react";
import { useStaeValue } from "../../components/context-api/StateProvider";
import "./Checkout.scss";
import CheckoutForm from "./checkoutForm/CheckoutForm";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStaeValue();

  return (
    <div className="checkout">
      {/* If Else statement, let user's know if they have item or not in basket */}
      {basket?.length === 0 ? (
        <div>
          <h1>Your Basket is empty!</h1>
          <p>You have no items in your basket!</p>
        </div>
      ) : (
        <div>
          <h1 className="checkout__title">Your Shopping Basket</h1>
          {/* List all current items in basket */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              amount={item.amount}
            ></CheckoutProduct>
          ))}
        </div>
      )}

      {/* SubTotal Section */}
      {basket.length > 0 && (
        <div className="checkout__right">
          <CheckoutForm></CheckoutForm>
        </div>
      )}
    </div>
  );
}

export default Checkout;
