import React from "react";
import { FaLocationArrow } from "react-icons/fa";

import "./WindStatus.css";
const WindStatus = ({ windStatus }) => {
  const { deg, speed } = windStatus;

  const speedInMph = Math.round(speed * 2.237);

  // Function to handle pointer direction
  const getDirection = (angle) => {
    // We divide it into 16 sections
    let directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    // This means, every 360 / 16 degree, there's a section change
    // So, in our case, every 22.5 degree, there's a section change
    // In order to get the correct section, we just need to divide
    let section = parseInt(angle / 22.5 + 0.5);
    // If our result comes to be x.6, which should normally be rounded off to
    // int(x) + 1, but parseInt doesn't care about it
    // Hence, we are adding 0.5 to it

    // Now we know the section, just need to make sure it's under 16
    section = section % 16;

    // Now we can return it
    return directions[section];
  };

  return (
    <div className="wind-status">
      <p>Wind status</p>
      <p>
        <span> {speedInMph} </span> mph
      </p>
      <div className="direction-container">
        <span className="direction-icon">
          <FaLocationArrow style={{ transform: `rotate(${deg}deg)` }} />
        </span>
        <span className="direction-description">{getDirection(deg)}</span>
      </div>
    </div>
  );
};

export default WindStatus;
