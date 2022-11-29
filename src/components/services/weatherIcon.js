import clearSky from "../../assets/Clear.png";
import lightClouds from "../../assets/LightCloud.png";
import brokenClouds from "../../assets/HeavyCloud.png";
import lightRain from "../../assets/LightRain.png";
import rain from "../../assets/Shower.png";
import thunderstorm from "../../assets/Thunderstorm.png";

const weatherIcon = (weather) => {
  switch (weather) {
    case "clear sky":
      return clearSky;
    case "few clouds":
      return lightClouds;
    case "scattered clouds":
      return lightClouds;
    case "broken clouds":
      return brokenClouds;
    case "shower rain":
      return lightRain;
    case "rain":
      return rain;
    case "thunderstorm":
      return thunderstorm;
    case "snow":
      return "../../assets/Snow.png";
    case "mist":
      return "../../assets/Sleet.png";
    default:
      return "../../assets/Clear.png";
  }
};

export default weatherIcon;
