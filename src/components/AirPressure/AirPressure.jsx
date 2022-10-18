import React from "react";

import "./AirPressure.css";
const AirPressure = ({ airPressure }) => {
  const airPressureInMb = airPressure;
  return (
    <div className="air-pressure">
      <p>Air Pressure</p>
      <p>
        <span className="air-pressure-value">{airPressureInMb}</span>
        <span>mb</span>
      </p>
    </div>
  );
};

export default AirPressure;
