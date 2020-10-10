import React from "react";
import { AboutUs } from "../about-us/about-us.component";
import { Card } from "../card/card.component";
import { Contact } from "../contact/contact.component";
import picture1 from "./picture1.jpeg";
import picture2 from "./picture2.jpeg";
import picture3 from "./picture3.jpeg";

import logo from "./logo.jpeg";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list row pt-2">
      <div className="col-12">
        <img
          alt="logo"
          src={logo}
          style={{ width: "650px", height: "500px" }}
        />
      </div>
      <div className="col-12">
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          Zrobimy z Twojego ciała dzieło sztuki
        </p>
      </div>
      <div className="col-12">
        <p style={{ fontSize: "25px", maxWidth: "750px", margin: "0 auto" }}>
          / UTRATA WAGI / PRZYROST MIĘŚNI / PRZYGOTOWANIA DO ŚLUBU / ONLINE
          COACHING / DIETETYKA /
        </p>
      </div>
      <div className="row" style={{ margin: "30px auto" }}>
        <div className="col-12 col-md-4">
          <img
            alt="img1"
            src={picture1}
            style={{ height: "500px", width: "350px" }}
          />
        </div>
        <div className="col-12 col-md-4">
          <img
            alt="img2"
            src={picture2}
            style={{ height: "500px", width: "350px", marginTop: "50px" }}
          />
        </div>
        <div className="col-12 col-md-4">
          <img
            alt="img3"
            src={picture3}
            style={{ height: "500px", width: "350px" }}
          />
        </div>
      </div>
      {/* <AboutUs />
      {props.trainers.map((trainer) => (
        <Card key={trainer.id} trainer={trainer}></Card>
      ))}
      <Contact /> */}
    </div>
  );
};
