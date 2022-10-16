import React from "react";

import "./AirPressure.css";
const AirPressure = () => {
  return (
    <div className="air-pressure">
      <p>Air Pressure</p>
      <p>
        <span className="air-pressure-value">998</span>
        <span>mb</span>
      </p>
    </div>
  );
};

export default AirPressure;
