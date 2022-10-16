import React from "react";
import Forecast from "../Forecast/Forecast";
import Units from "../Units/Units";

import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="units-div">
        <Units unit={"&deg;C"} />
        <Units unit={"&deg;F"} />
      </div>
      <div className="forecasts-div">
        <Forecast date="Tomorrow" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecast date="Sun, 7 Jun" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecast date="Mon, 8 Jun" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecast date="Tue, 9 Jun" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecast date="Wed, 10 Jun" temp="16&deg;C" feels-like="11&deg;C" />
      </div>
      <div></div>
    </div>
  );
};

export default Main;
