import LightRain from "../../assets/LightRain.png";

import "./Forecast.css";
const Forecast = ({ date, maxTemp, minTemp }) => {
  return (
    <div className="forecast">
      <p className="date"> {date} </p>
      <div>
        <img src={LightRain} alt="weather condition overview" />
      </div>
      <p>
        <span className="temp">{maxTemp}&deg;C</span>
        <span className="feels-like">{minTemp}&deg;C</span>
      </p>
    </div>
  );
};

export default Forecast;
