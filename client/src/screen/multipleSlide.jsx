import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

const MultipleSlidesExample = () => {
  const style = {
    textAlign: "center",
    background: "red",
    // padding: "2px 0",
    fontSize: "30px",
    color: "red",
    height: "30px",
  };

  const properties = {
    duration: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    indicators: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div style={style}>First Slide</div>
          <div style={style}>Second Slide</div>
          <div style={style}>Third Slide</div>
          <div style={style}>Fourth Slide</div>
          <div style={style}>Fifth Slide</div>
          <div style={style}>sixth Slide</div>
          <div style={style}>Seventh Slide</div>
          <div style={style}>Eight Slide</div>
        </Slide>
      </div>
    </div>
  );
};

export default MultipleSlidesExample;
