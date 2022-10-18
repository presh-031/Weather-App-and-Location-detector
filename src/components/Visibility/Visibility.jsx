import React from "react";

import "./Visibility.css";
const Visibility = ({ visibility }) => {
  const visibilityInMiles = (visibility / 1609).toFixed(1);
  return (
    <div className="visibility">
      <p>Visibility</p>
      <p>
        <span className="visibility-value"> {visibilityInMiles} </span>
        <span>miles</span>
      </p>
    </div>
  );
};

export default Visibility;
