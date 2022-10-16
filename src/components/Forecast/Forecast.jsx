import LightRain from "../../assets/LightRain.png";

import "./Forecast.css";
const Forecast = ({ date, temp, feels_like }) => {
  return (
    <div className="forecast">
      <p className="date"> {date} </p>
      <div>
        <img src={LightRain} alt="" />
      </div>
      <p>
        <span className="temp">{temp}</span>
        <span className="feels-like">{feels_like}</span>
      </p>
    </div>
  );
};

export default Forecast;
