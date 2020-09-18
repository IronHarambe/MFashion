import React from "react";
import "./Paint.scss";
import Product from "../../../product/Product";

function Paint() {
  return (
    <div className="paint">
      <h1>Paintings</h1>

      <div className="paint-wrapper">
        <Product
          id="1"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={200}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/9tcdfYg/painting.jpg"
        ></Product>
        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/zXpB0wx/painting2.jpg"
        ></Product>

        <Product
          id="3"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/tsMF2DH/painting3.jpg"
        ></Product>

        <Product
          id="4"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={120}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/mSFqF8f/painting4.jpg"
        ></Product>

        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/BVtd85p/painting5.jpg"
        ></Product>

        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/VWhR1wt/painting6.jpg"
        ></Product>

        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/bFHYmVN/painting7.jpg"
        ></Product>

        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/wpK5MPy/painting8.jpg"
        ></Product>

        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/Pr6vrfN/painting9.jpg"
        ></Product>

        <Product
          id="2"
          title="Heavenly Aspect Reawakening"
          description="An secondary artpiece inspired from roman influences"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/3NMS4FY/painting10.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Paint;
