import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h1>Art Nation</h1>
      <div className="footer__section">
        <div className="footer__contact">
          <h5>Email: ArtNation@gmail.com</h5>
          <h5>Number: 0455555555</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
