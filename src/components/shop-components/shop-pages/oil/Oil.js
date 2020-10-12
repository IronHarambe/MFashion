import React from "react";
import "./Oil.scss";
import Product from "../../../product/Product.js";

function Oil() {
  return (
    <div className="oil">
      <h1>Oil Paintings</h1>
      <div className="oil__wrapper">
        <Product
          id="20"
          title="Bard's Tale"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={150}
          artist="Aniyah Lovell"
          image="https://i.ibb.co/dfbvjqk/oil1.jpg"
        ></Product>
        <Product
          id="21"
          title="General's Story"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={200}
          artist="Aniyah Lovell"
          image="https://i.ibb.co/VJn1xXy/oil2.jpg"
        ></Product>
        <Product
          id="22"
          title="Discussions"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={250}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/t3WZstd/oil3.jpg"
        ></Product>
        <Product
          id="23"
          title="Disiples"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={300}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/stsbqVm/oil4.jpg"
        ></Product>
        <Product
          id="24"
          title="Town"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={100}
          artist="Aniyah Lovell"
          image="https://i.ibb.co/hMfgkg3/oil5.jpg"
        ></Product>

        <Product
          id="25"
          title="Flower Arrangment"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={500}
          artist="Elyas Melton"
          image="https://i.ibb.co/k6Yxh2V/oil6.jpg"
        ></Product>
        <Product
          id="26"
          title="Self Portrait"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price="800"
          artist={900}
          image="https://i.ibb.co/VC4fTss/oil7.jpg"
        ></Product>
        <Product
          id="27"
          title="Chimney Fires"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={400}
          artist="Leonardo V Darcia"
          image="https://i.ibb.co/PG0Rr8C/oil8.jpg"
        ></Product>
        <Product
          id="28"
          title="Food Banquet"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={220}
          artist="Elyas Melton"
          image="https://i.ibb.co/n6g6hbv/oil9.jpg"
        ></Product>
        <Product
          id="29"
          title="Flowers"
          description="An secondary artpiece inspired from roman influences"
          amount="0"
          price={330}
          artist="Nina Keenan"
          image="https://i.ibb.co/3BSv91n/oil10.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Oil;
