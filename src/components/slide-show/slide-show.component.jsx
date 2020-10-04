import React from "react";
import { Zoom } from "react-slideshow-image";
import im1 from "./image1.jpg";
import im2 from "./image2.jpg";
import im3 from "./image3.jpg";
import "react-slideshow-image/dist/styles.css";

const slideImages = [im1, im2, im3];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Zoom arrows={false} duration={3500} style={{ width: "100%" }}>
        {slideImages.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img
              alt="test"
              style={{ objectFit: "cover", width: "100%" }}
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
