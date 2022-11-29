import axios from "axios";
import { useState, useEffect } from "react";

import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

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
      // if (error.GeolocationPositionError.code === 2) {
      //   alert("Network error");
      // }
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    getLocation();
  }, []);

  async function getWeather(lat, lon) {
    // console.log(lat, lon);
    try {
      const API_key = "e416be1f249467ff1237c0b4e24aedd7";
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

      const res = await axios.get(url);
      const data = await res.data.list;

      setTodayData(data[0]);

      // Relatively random picks, really, and total 5 to fit the design by generating exactly 5 components.
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
    // console.log(`${lat}, ${lon} in app`);

    getWeather(lat, lon);

    // The new city should show the exact same city from the suggestion.
    setCity(`${name}, ${state}, ${country}`);
  }

  // Getting data about geoClicked from Aside
  function getGeoClick(geoClicked) {
    geoClicked && getLocation();
  }

  return (
    <div>
      <Aside date={date} getGeoClick={getGeoClick} childToApp={childToApp} todayData={todayData} city={city} />
      <Main todayData={todayData} futureData={futureData} />
    </div>
  );
};

export default App;
