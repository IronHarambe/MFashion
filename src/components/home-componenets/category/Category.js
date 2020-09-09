import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="category">
      <div className="category__collections">
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <div className="category_collection min__img">
            <h5 className="picture__text">Minimal</h5>
          </div>
        </Link>

        <Link to="/shop" style={{ textDecoration: "none" }}>
          <div className="category_collection paint__img ">
            <h5 className="picture__text">Paint</h5>
          </div>
        </Link>

        <Link to="/shop" style={{ textDecoration: "none" }}>
          <div className="category_collection abst__img ">
            <h5 className="picture__text">Abstract</h5>
          </div>
        </Link>

        <Link to="/shop" style={{ textDecoration: "none" }}>
          <div className="category_collection oil__img">
            <h5 className="picture__text">Oil </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
