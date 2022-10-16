import React, { useEffect } from "react";
import Forecast from "../Forecast/Forecast";
import Units from "../Units/Units";
import WindStatus from "../WindStatus/WindStatus";
import Humidity from "../Humidity/Humidity";
import Visibility from "../Visibility/Visibility";
import AirPressure from "../AirPressure/AirPressure";

import "./Main.css";
const Main = () => {
  function getLocation() {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      getWeather(latitude, longitude);
    };

    const errorCallback = (error) => {
      console.log(error);
      // alert(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  function getWeather(latitude, longitude) {
    try {
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="main">
      <section className="units-section">
        <Units unit={"&deg;C"} />
        <Units unit={"&deg;F"} />
      </section>

      <section className="forecasts-section">
        <Forecast date="Tomorrow" temp="16&deg;C" feels_like="11&deg;C" />
        <Forecast date="Sun, 7 Jun" temp="16&deg;C" feels_like="11&deg;C" />
        <Forecast date="Mon, 8 Jun" temp="16&deg;C" feels_like="11&deg;C" />
        <Forecast date="Tue, 9 Jun" temp="16&deg;C" feels_like="11&deg;C" />
        <Forecast date="Wed, 10 Jun" temp="16&deg;C" feels_like="11&deg;C" />
      </section>

      <section className="highlights-section">
        <p>Today's Highlights</p>
        <div>
          <WindStatus />
          <Humidity />
          <Visibility />
          <AirPressure />
        </div>
      </section>
      <footer>
        <p>
          created by <a href="https://github.com/presh-031">presh-031</a> - devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default Main;
