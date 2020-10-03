import React from "react";
import { AboutUs } from "../about-us/about-us.component";
import { Card } from "../card/card.component";
import { Contact } from "../contact/contact.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list row">
      {props.trainers.map((trainer) => (
        <Card key={trainer.id} trainer={trainer}></Card>
      ))}
      <AboutUs />
      <Contact />
    </div>
  );
};
