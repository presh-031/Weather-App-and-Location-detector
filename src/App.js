import axios from "axios";
import { useState, useEffect } from "react";

import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import "./App.css";
const App = () => {
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
    <div className="App">
      <Aside />
      <Main />
    </div>
  );
};

export default App;
