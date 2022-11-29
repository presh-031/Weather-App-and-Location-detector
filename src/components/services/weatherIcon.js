import clearSky from "../../assets/Clear.png";
import lightClouds from "../../assets/LightCloud.png";
import brokenClouds from "../../assets/HeavyCloud.png";
import lightRain from "../../assets/LightRain.png";
import rain from "../../assets/Shower.png";
import thunderstorm from "../../assets/Thunderstorm.png";
import snow from "../../assets/Snow.png";
import mist from "../../assets/Sleet.png";

// still working on getting the right icons depending on the weathr description returned from api
// scattered clouds
//
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
      return snow;
    case "mist":
      return mist;
    default:
      return clearSky;
  }
};

export default weatherIcon;
