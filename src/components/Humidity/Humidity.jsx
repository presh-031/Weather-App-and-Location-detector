import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import "./Humidity.css";
const Humidity = () => {
  return (
    <div className="Humidity">
      <p>Humidity</p>
      <p>
        <span className="humidity-value">84</span>%
      </p>
      <ProgressBar bgcolor="#6a1b9a" completed="84" />
    </div>
  );
};

export default Humidity;
