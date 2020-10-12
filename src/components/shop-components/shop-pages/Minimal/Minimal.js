import React from "react";
import Product from "../../../product/Product";
import "./Minimal.scss";

function Minimal() {
  return (
    <div className="minimal">
      <h1>Minimalistic Painting</h1>
      <div className="minimal__wrapper">
        <Product
          id="41"
          title="Typewriter"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={120}
          artist="Donald Hassan"
          image="https://i.ibb.co/YyHKYMk/min1.jpg"
        ></Product>
        <Product
          id="42"
          title="Flowers"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={220}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/fD5vnH7/min2.jpg"
        ></Product>
        <Product
          id="43"
          title="Orange"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={100}
          artist="Donald Hassan"
          image="https://i.ibb.co/q92TGBf/min3.jpg"
        ></Product>
        <Product
          id="44"
          title="Back Portrait"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={320}
          artist="Donald Hassan"
          image="https://i.ibb.co/64drqWw/min4.jpg"
        ></Product>
        <Product
          id="45"
          title="Baloon"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={80}
          artist="Nyah Murillo"
          image="https://i.ibb.co/Lv9ssSc/min5.jpg"
        ></Product>
        <Product
          id="46"
          title="Banana"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={170}
          artist="Yasemin Stevens"
          image="https://i.ibb.co/Sy4t7PH/min6.jpg"
        ></Product>
        <Product
          id="47"
          title="Pink Flowers"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={120}
          artist="Nyah Murillo"
          image="https://i.ibb.co/FH6yQnW/min7.jpg"
        ></Product>
        <Product
          id="48"
          title="Snow Trees"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={310}
          artist="Yasemin Stevens"
          image="https://i.ibb.co/JxykJwZ/min8.jpg"
        ></Product>
        <Product
          id="49"
          title="Backdrop"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={450}
          artist="Nyah Murillo"
          image="https://i.ibb.co/dKnN5pV/min9.jpg"
        ></Product>
        <Product
          id="50"
          title="Solo Flower"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={220}
          artist="Yasemin Stevens"
          image="https://i.ibb.co/NrZ1Pw5/min10.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Minimal;
