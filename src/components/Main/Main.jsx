import React from "react";

import Loading from "../Loading/Loading";

import Forecast from "../Forecast/Forecast";
import Units from "../Units/Units";
import WindStatus from "../WindStatus/WindStatus";
import Humidity from "../Humidity/Humidity";
import Visibility from "../Visibility/Visibility";
import AirPressure from "../AirPressure/AirPressure";

import "./Main.css";
const Main = ({ todayData }) => {
  console.log(todayData);

  return (
    <div className="main">
      {todayData ? (
        <>
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
              <WindStatus windStatus={todayData.wind} />
              <Humidity humidity={todayData.main.humidity} />
              <Visibility visibility={todayData.visibility} />
              <AirPressure airPressure={todayData.main.pressure} />
            </div>
          </section>
        </>
      ) : (
        <Loading type={"bubbles"} color={"#ffffff"} />
      )}
      <footer>
        <p>
          created by <a href="https://github.com/presh-031">presh-031</a> - devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default Main;
