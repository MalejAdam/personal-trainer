import React from "react";
import { AboutUs } from "../about-us/about-us.component";
import { Card } from "../card/card.component";
import { Contact } from "../contact/contact.component";
import SlideShow from "../slide-show/slide-show.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div>
      <SlideShow />
      <div className="card-list row pt-2">
        <AboutUs />
        {props.trainers.map((trainer) => (
          <Card key={trainer.id} trainer={trainer}></Card>
        ))}
        <Contact />
      </div>
    </div>
  );
};
