import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

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
