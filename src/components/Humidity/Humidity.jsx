import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import "./Humidity.css";
const Humidity = ({ humidity }) => {
  let bgColor;
  if (humidity < 40) {
    bgColor = "red";
  } else if (humidity < 80) {
    bgColor = "yellow";
  } else {
    bgColor = "green";
  }

  return (
    <div className="Humidity">
      <p>Humidity</p>
      <p>
        <span className="humidity-value">{humidity}</span>%
      </p>
      <ProgressBar bgcolor={bgColor} completed={humidity} />
    </div>
  );
};

export default Humidity;
