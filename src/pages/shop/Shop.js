import React from "react";
import "./Shop.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShopBanner from "../../components/shop-components/shop-banner/ShopBanner";
import ShopNav from "../../components/shop-components/shop-nav/ShopNav";
import Paint from "../../components/shop-components/shop-pages/paint/Paint";
import Oil from "../../components/shop-components/shop-pages/oil/Oil";
import Minimal from "../../components/shop-components/shop-pages/Minimal/Minimal";
import Abstract from "../../components/shop-components/shop-pages/abstract/Abstract";

function Shop() {
  return (
    <Router>
      <div className="shop">
        <ShopBanner></ShopBanner>
        <div className="shopping_container">
          <ShopNav></ShopNav>
          <Switch>
            <Route path="/abstract">
              <Abstract></Abstract>
            </Route>
            <Route path="/minimal">
              <Minimal></Minimal>
            </Route>
            <Route path="/oil">
              <Oil></Oil>
            </Route>
            <Route path="/">
              <Paint></Paint>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Shop;
