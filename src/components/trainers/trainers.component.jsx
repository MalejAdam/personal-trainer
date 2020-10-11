import React from "react";
import logo from './logo.jpeg'
import "./trainers.styles.scss";

export const Trainers = (props) => {
  return (
    <div className="trainers-container">
        <div className="main-description">
         <h1>Team TAOB</h1>
         <p>Nasi trenerzy to ludzie, którzy kochają swoją pracę i swoich podopiecznych. Każdego członka zespołu TAOB cechuje ponadprzeciętna wiedza i bogate doświadczenie.</p>
        </div>
        <img className="logo" alt="logo" src={logo} />
    </div>
  );
};
