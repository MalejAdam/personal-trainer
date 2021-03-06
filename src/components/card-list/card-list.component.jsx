import React from "react";
import picture1 from "./picture1.jpeg";
import picture2 from "./picture2.jpeg";
import picture3 from "./picture3.jpeg";
import {SocialIcon} from "react-social-icons";

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
      <div className="col-12">
      <div className="row" style={{ margin: "30px auto" }}>
        <div className="col-12 col-md-4">
          <img
            alt="img1"
            src={picture1}
            className="image side-image"
          />
          <p
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "70px" }}
          >
            TRENUJ Z TAOB
          </p>
          <p style={{ fontSize: "20px", width: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
            Czas wprowadzić marzenia o idealnej sylwetce w życie.
          </p>
          <p style={{ fontSize: "20px", width: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
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
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
          >
            100% RZETELNOŚCI
          </p>
          <p style={{ fontSize: "20px", width: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
            Najlepsi trenerzy personalni certyfikowani przez REPs Polska.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            alt="img3"
            src={picture3}
            className="image side-image"
          />
          <p
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "70px", width: "400px", marginLeft: 'auto', marginRight: 'auto' }}
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
