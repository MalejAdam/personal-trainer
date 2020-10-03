import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.styles.css";

const Header = () => (
  <div className="header navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="options">
      <HashLink className="option" to="#AboutUs">
        O NAS
      </HashLink>
      <Link className="option" to="/rezerwacja">
        REZERWACJA (TODO)
      </Link>
      <HashLink className="option" to="#Contact">
        KONTAKT
      </HashLink>
    </div>
  </div>
);

export default Header;
