import React from "react";
import Forecasts from "../Forecasts/Forecasts";
import Units from "../Units/Units";

const Main = () => {
  return (
    <div>
      <div>
        <Units unit={"&deg;C"} />
        <Units unit={"&deg;F"} />
      </div>
      <div>
        <Forecasts date="Tomorrow" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecasts date="Sun, 7 Jun" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecasts date="Mon, 8 Jun" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecasts date="Tue, 9 Jun" temp="16&deg;C" feels-like="11&deg;C" />
        <Forecasts date="Wed, 10 Jun" temp="16&deg;C" feels-like="11&deg;C" />
      </div>
    </div>
  );
};

export default Main;
