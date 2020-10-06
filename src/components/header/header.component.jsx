import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "./taob.jpg";
import "./header.styles.scss";

const Header = () => (
  <nav
    style={{ justifyContent: "space-between" }}
    className="navbar navbar-expand-lg navbar-light bg-light"
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="logo"
      />
      <p
        style={{
          margin: "0px",
          fontWeight: "bold",
          color: "rgb(180, 63, 180)",
          fontSize: "30px",
        }}
        className="d-none d-sm-block"
      >
        The Art Of Bodybuilding
      </p>
    </div>
    <div style={{ flex: "auto", display: "flex", justifyContent: "flex-end" }}>
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
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="options">
          <HashLink className="option" to="#AboutUs">
            O NAS
          </HashLink>
          <Link className="option" to="">
            REZERWACJA
          </Link>
          <HashLink className="option" to="#Contact">
            KONTAKT
          </HashLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
