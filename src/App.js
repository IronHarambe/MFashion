import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

import Sign from "./pages/sign/Sign";
import Checkout from "./pages/checkout/Checkout";
import { useStaeValue } from "./components/context-api/StateProvider";
import { auth } from "./pages/Firebase";

function App() {

  

  // const [{ user }, dispatch] = useStaeValue();
  const [ dispatch] = useStaeValue();
 

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // THe user just/was logged in, set user to auth user
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out, set user to n
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
// }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shop">
            <Header></Header>
            <Shop></Shop>
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
