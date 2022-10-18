import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import "./Humidity.css";
const Humidity = ({ humidity }) => {
  return (
    <div className="Humidity">
      <p>Humidity</p>
      <p>
        <span className="humidity-value">{humidity}</span>%
      </p>
      <ProgressBar bgcolor="#FFEC65" completed="84" />
    </div>
  );
};

export default Humidity;
