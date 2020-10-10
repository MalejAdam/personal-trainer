import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "./taob.jpg";
import "./header.styles.scss";

const Header = () => (
  <div className="header-container">
    <div
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img
        src={logo}
        className="header-image d-inline-block align-top "
        alt="logo"
      />
      <p style={{ fontWeight: "bold" }}>
        Zrobimy z Twojego ciała dzieło sztuki
      </p>
    </div>
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="options">
          <HashLink className="option" to="/">
            HOME
          </HashLink>
          <Link className="option" to="">
            NASI TRENERZY
          </Link>
          <HashLink className="option" to="#Cooperation">
            WSPÓŁPRACA
          </HashLink>
          <HashLink className="option" to="/">
            KONTAKT / REZERWACJE
          </HashLink>
          <Link className="option" to="">
            CENNIK
          </Link>
          <HashLink className="option" to="#Cooperation">
            OFERTA ŚLUBNA
          </HashLink>
          <Link className="option" to="">
            DLA FIRM
          </Link>
          <HashLink className="option" to="#Cooperation">
            KARTY PODARUNKOWE
          </HashLink>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
