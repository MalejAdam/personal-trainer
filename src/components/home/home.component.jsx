import React from "react";
import picture1 from "./picture1.jpeg";
import picture2 from "./picture2.jpeg";
import picture3 from "./picture3.jpeg";
import {SocialIcon} from "react-social-icons";

import logo from "./logo.jpeg";
import "./home.styles.scss";

export const Home = () => {
  return (
    <div className="home-container row pt-2">
      <div className="col-12">
        <img
          className="logo"
          alt="logo"
          src={logo}
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
      <div className="col-12">
      <div className="row" style={{ margin: "30px auto" }}>
        <div className="col-12 col-md-4">
          <img
            alt="img1"
            src={picture1}
            className="image side-image"
          />
          <p
            className="p-title site-p-title"
            style={{ fontSize: "20px" }}
          >
            TRENUJ Z TAOB
          </p>
          <p className="p-description" >
            Czas wprowadzić marzenia o idealnej sylwetce w życie.
          </p>
          <p className="p-description">
            Niezależnie od tego co jest Twoim celem, możemy razem to osiągnąć.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            alt="img2"
            src={picture2}
            className="image middle-image"
          />
          <p
            className="p-title"
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
          >
            100% RZETELNOŚCI
          </p>
          <p className="p-description">
            Najlepsi trenerzy personalni certyfikowani przez REPs Polska.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            alt="img3"
            src={picture3}
            className="image side-image"
          />
          <p className="p-title p-description site-p-title"
            style={{ fontWeight: "bold" }}
          >
            SPRAWDŹ TAOB W SOCIAL MEDIA
          </p>
          <p style={{ fontSize: "20px" }}>Zanim zaczniemy:</p>
          <div>
            <SocialIcon url="https://www.instagram.com/the.art.of.bodybuilding/" style={{marginRight: '20px'}} />
            <SocialIcon url="https://www.facebook.com/the.art.of.bodybuilding" style={{marginLeft: '20px'}}/>
          </div>
        </div>
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
