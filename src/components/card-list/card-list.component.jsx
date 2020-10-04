import React from "react";
import { AboutUs } from "../about-us/about-us.component";
import { Card } from "../card/card.component";
import { Contact } from "../contact/contact.component";
import { Slide } from "react-slideshow-image";
import "./card-list.styles.css";
import "react-slideshow-image/dist/styles.css";
import im1 from "./image1.jpg";
import im2 from "./image2.jpg";

import im3 from "./image3.jpg";

const slideImages = [im1, im2, im3];

export const CardList = (props) => {
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((element, index) => {
            return (
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${element})` }}>
                  <span>Slide {index + 1}</span>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
      <div className="card-list row">
        <AboutUs />
        {props.trainers.map((trainer) => (
          <Card key={trainer.id} trainer={trainer}></Card>
        ))}
        <Contact />
      </div>
    </div>
  );
};
