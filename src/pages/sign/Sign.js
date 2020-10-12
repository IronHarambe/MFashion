import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Sign.scss";
import { auth } from "../Firebase";

function Sign() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // Register with email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      // If successfull, create new user with email and password
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="sign">
      <div className="sign__container">
        <div className="sign__right">
          <h1>Sign In</h1>
          <form action="#" className="form">
            <h5>Email:</h5>
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h5>Password:</h5>
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" onClick={signIn} className="sign__button">
              Login
            </Button>
            <div className="register__section">
              <p>Don't have an account? Register here!</p>
              <Button
                type="submit"
                onClick={register}
                className="sign__button register__btn"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
        <div className="sign__left">
          <img src={require("../../images/home/home3.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sign;
