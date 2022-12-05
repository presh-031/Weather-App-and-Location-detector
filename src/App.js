import axios from "axios";
import { useState, useEffect } from "react";

import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import "./App.css";
const App = () => {
  const [todayData, setTodayData] = useState(null);
  const [city, setCity] = useState("");
  const [futureData, setFutureData] = useState(null);

  const [date, setDate] = useState("");
  const [data, setData] = useState("");

  function getLocation() {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      getWeather(latitude, longitude);
      getCity(latitude, longitude);
    };

    const error = (error) => {
      console.log(error);
      if (error.code === 1) {
        // no location access
        // use a default city and weather (Indianapolis, Indiana, US.)
        getWeather(39.7683331, -86.1583502);
        getCity(39.7683331, -86.1583502);
      }
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    // If theres an error in getting location,
    // it should use a default location.
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getWeather(lat, lon) {
    try {
      const API_key = "e416be1f249467ff1237c0b4e24aedd7";
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

      const res = await axios.get(url);
      const data = await res.data.list;

      setTodayData(data[0]);

      // Relatively random picks, really(api) and total 5 to fit the design by generating exactly 5 components.
      setFutureData([data[8], data[16], data[22], data[29], data[35]]);
    } catch (err) {
      console.log(err);
    }
  }

  // Using reverse geo-location api to get the same city with the lat and long info.
  async function getCity(lat, lon) {
    try {
      const API_key_2 = "6658b5987a716f929da6227307c0bafd";
      const url_2 = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_key_2}`;

      const res_2 = await axios.get(url_2);
      const locationData = await res_2.data[0].name;

      setCity(locationData);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  }
  function childToApp(lat, lon, name, state, country) {
    getWeather(lat, lon);

    // The new city should show the exact same city from the suggestion.
    setCity(`${name}, ${state}, ${country}`);
  }

  // Getting data about geoClicked from Aside
  function getGeoClick(geoClicked) {
    geoClicked && getLocation();
  }

  return (
    <div className="App">
      <Aside date={date} getGeoClick={getGeoClick} childToApp={childToApp} todayData={todayData} city={city} />
      <Main todayData={todayData} futureData={futureData} />
    </div>
  );
  // Temp conversion
  // Extreme responsiveness and at around 500px
};

export default App;
