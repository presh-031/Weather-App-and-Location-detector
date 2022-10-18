import React from "react";

import "./WindStatus.css";
const WindStatus = ({ windStatus }) => {
  // console.warn(windStatus);
  const { deg, speed } = windStatus;

  const speedInMph = Math.round(speed * 2.237);
  return (
    <div className="wind-status">
      <p>Wind status</p>
      <p>
        <span> {speedInMph} </span> mph
      </p>
      {/* Should use deg to make a pointer */}
      <p>wsw</p>
    </div>
  );
};

export default WindStatus;
