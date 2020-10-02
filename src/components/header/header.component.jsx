import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => (
  <div className="header navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="options">
      <Link className="option" to="/onas">
        O NAS
      </Link>
      <Link className="option" to="/rezerwacja">
        REZERWACJA
      </Link>
      <Link className="option" to="/kontakt">
        KONTAKT
      </Link>
    </div>
  </div>
);

export default Header;
