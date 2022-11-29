import React, { useState } from "react";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

import cloudBg from "../../assets/Cloud-background.png";

import Search from "../Search/Search";
import Loading from "../Loading/Loading";

import weatherIcon from "../services/weatherIcon";

import "./Aside.css";

const Aside = ({ getGeoClick, childToApp, todayData, city }) => {
  const [showSearchArea, setShowSearchArea] = useState(false);
  const [geoClicked, setGeoClicked] = useState(true);

  const date = todayData ? new Date(`${todayData.dt_txt}`).toDateString().split(" ") : [];

  function childToParent(lat, lon, name, state, country) {
    childToApp(lat, lon, name, state, country);
  }

  console.log(city);
  return (
    <div className="Aside">
      {showSearchArea ? (
        <Search
          childToParent={childToParent}
          showSearchArea={showSearchArea}
          setShowSearchArea={setShowSearchArea}
          city={city}
        />
      ) : todayData ? (
        <>
          <div>
            <input
              type="text"
              placeholder="Search for places"
              onClick={() => {
                setShowSearchArea(true);
              }}
            />
            <div
              className="geo"
              onClick={() => {
                getGeoClick(geoClicked);
              }}
            >
              <IconContext.Provider value={{ className: "geo-icon" }}>
                <BiCurrentLocation />
              </IconContext.Provider>
            </div>
          </div>
          <div className="cloud-with-bg">
            <img className="bg-image" src={cloudBg} alt="" />
            <div>
              <img src={weatherIcon(todayData.weather[0].description)} alt="weather description" />
            </div>
          </div>
          <div className="temperature-div">
            <p>
              <span className="temperature"> {Math.round(todayData.main.temp)} </span>{" "}
              <span className="temperature-unit">
                <span>&deg;</span>C
              </span>
            </p>
          </div>
          <div className="weather-condition-div">
            <p>{todayData.weather[0].main}</p>
          </div>
          <p className="date">
            Today &middot; {date[0]}, {date[1]} {date[2]}
          </p>
          <div className="location-div">
            <IconContext.Provider value={{ color: "#88869D", className: "location-icon" }}>
              <MdLocationOn />
            </IconContext.Provider>
            <p>{city}</p>
          </div>
        </>
      ) : (
        <Loading type={"bubbles"} color={"#ffffff"} />
      )}
    </div>
  );
};

export default Aside;
