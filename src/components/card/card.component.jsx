import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container col m-2">
      <img alt="trainer" src={props.trainer.imageUrl} />
      <h1>
        {props.trainer.name} {props.trainer.surname}
      </h1>
    </div>
  );
};
