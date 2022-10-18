import React, { useState } from "react";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

import shower from "../../assets/Shower.png";
import cloudBg from "../../assets/Cloud-background.png";

import Search from "../Search/Search";
import Loading from "../Loading/Loading";

import "./Aside.css";

const Aside = ({ getGeoClick, childToApp, todayData, city }) => {
  const [showSearchArea, setShowSearchArea] = useState(false);
  // const [data, setData] = useState("");
  console.log(todayData);

  const [geoClicked, setGeoClicked] = useState(true);

  const date = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  function childToParent(lat, lon, name, state, country) {
    console.log(lat, lon);
    childToApp(lat, lon, name, state, country);
  }

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
              <img src={shower} alt="" />
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
          <p className="date">Today &middot; {date}</p>
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
