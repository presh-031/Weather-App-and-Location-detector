import axios from "axios";
import { useState, useEffect } from "react";

import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import "./App.css";
const App = () => {
  const [todayData, setTodayData] = useState(null);
  const [city, setCity] = useState("");

  const [data, setData] = useState("");

  function getLocation() {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      getWeather(latitude, longitude);
      getCity(latitude, longitude);
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getWeather(lat, lon) {
    console.log(lat, lon);
    try {
      const API_key = "e416be1f249467ff1237c0b4e24aedd7";
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

      const res = await axios.get(url);
      const data = await res.data.list;

      setTodayData(data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  // Using reverse geo-location api to get the same city with the lat and long info.
  async function getCity(lat, lon) {
    try {
      const API_key_2 = "6658b5987a716f929da6227307c0bafd";
      const url_2 = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_key_2}`;

      const res_2 = await axios.get(url_2);
      const locationData = await res_2.data[0].name;

      console.warn(locationData);
      setCity(locationData);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  }
  function childToApp(value) {
    console.log(`${value} in app`);
    // Convert this value to lat and lon  with geolocation, then call getWeather with the lat and lon to get the weather info.
    // getSearchedCityInfo(value);
    // set city to be equal to this value
  }

  // Function to get lat&lon info of searched city and call getWeather
  // Using geolocation api
  // async function getSearchedCityInfo(value) {
  //   try {
  //     const API_key = "6658b5987a716f929da6227307c0bafd";
  //     const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value.toLowerCase()}&limit=5&appid=${API_key}`;

  //     const res = await axios.get(url);
  //     const data = await res.data;

  //     console.log(data);
  //   } catch (err) {
  //     console.log(`Error ${err}`);
  //   }
  // }

  return (
    <div className="App">
      <Aside childToApp={childToApp} todayData={todayData} city={city} />
      <Main todayData={todayData} />
    </div>
  );
};

export default App;
