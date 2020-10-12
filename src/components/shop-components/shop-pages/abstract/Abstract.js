import React from "react";
import "./Abstract.scss";
import Product from "../../../product/Product";

function Abstract() {
  return (
    <div className="abstract">
      <h1>Abstract Painting</h1>
      <div className="abstract__wrapper">
        <Product
          id="31"
          title="Static Distortion"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={400}
          artist="Ayomide Becker"
          image="https://i.ibb.co/4fTpFYk/modern.jpg"
        ></Product>
        <Product
          id="32"
          title="Colourful"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={400}
          artist="Ayomide Becker"
          image="https://i.ibb.co/QvjgMrd/modern2.jpg"
        ></Product>
        <Product
          id="33"
          title="Ambient"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={400}
          artist="Ayomide Becker"
          image="https://i.ibb.co/kydVktX/modern3.jpg"
        ></Product>
        <Product
          id="34"
          title="Wavey"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={200}
          artist="Yasemin Stevens"
          image="https://i.ibb.co/bmkJ7tz/modern4.jpg"
        ></Product>
        <Product
          id="35"
          title="Solid"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={600}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/zJX6WCS/modern5.jpg"
        ></Product>
        <Product
          id="36"
          title="Wool"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={800}
          artist="Yasemin Stevens"
          image="https://i.ibb.co/4NRCTMc/modern6.jpg"
        ></Product>
        <Product
          id="37"
          title="Liquid"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={300}
          artist="Elyas Melton"
          image="https://i.ibb.co/v4yX7DD/modern7.jpg"
        ></Product>
        <Product
          id="38"
          title="Grey Matter"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={700}
          artist="Elyas Melton"
          image="https://i.ibb.co/b74PJBD/modern8.jpg"
        ></Product>
        <Product
          id="39"
          title="Amber"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={300}
          artist="Can Jenkins"
          image="https://i.ibb.co/342nHpv/modern9.jpg"
        ></Product>
        <Product
          id="40"
          title="Goth Lights"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={900}
          artist="Can Jenkins"
          image="https://i.ibb.co/YkG7zHF/modern10.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Abstract;
