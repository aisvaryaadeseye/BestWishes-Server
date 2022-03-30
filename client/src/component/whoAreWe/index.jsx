import React from "react";
import "./style.css";
const WhoAreWe = ({ who }) => {
  return (
    <>
      <div className="whoareweContainer">
        <h2>{who.title}</h2>
        <p>{who.description}</p>
        <div className="whoAreWeBtn">
          <button>
            Learn more
            <i className="fa fa-arrow-right arrowRight" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
