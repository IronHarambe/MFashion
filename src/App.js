import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Sign from "./pages/sign/Sign";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shop">
            <Header></Header>
            <Shop></Shop>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/sign">
            <Header></Header>
            <Sign></Sign>
            <Footer></Footer>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
            <Footer></Footer>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
