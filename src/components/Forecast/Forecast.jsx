import weatherIcon from "../services/weatherIcon";

import "./Forecast.css";
const Forecast = ({ date, maxTemp, minTemp, description }) => {
  return (
    <div className="forecast">
      <p className="date"> {date} </p>
      <div>
        <img src={weatherIcon(description)} alt="weather condition" />
      </div>
      <p className="temps">
        <span className="temp">{maxTemp}&deg;C</span>
        <span className="feels-like">{minTemp}&deg;C</span>
      </p>
    </div>
  );
};

export default Forecast;
