import React from "react";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

import shower from "../../assets/Shower.png";
import cloudBg from "../../assets/Cloud-background.png";

import Loading from "../Loading/Loading";

import "./Aside.css";

const Aside = ({ todayData }) => {
  console.log(todayData);

  const temp = Math.round(todayData.main.temp);
  const description = todayData.weather[0].main;
  return (
    <div className="Aside">
      {todayData ? (
        <>
          <div>
            <input type="text" placeholder="Search for places" />
            <div className="geo">
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
              <span className="temperature"> {temp} </span>{" "}
              <span className="temperature-unit">
                <span>&deg;</span>C
              </span>
            </p>
          </div>
          <div className="weather-condition-div">
            <p>{description}</p>
          </div>
          <p className="date">Today &middot; Fri, 5 Jun</p>
          <div className="location-div">
            <IconContext.Provider value={{ color: "#88869D", className: "location-icon" }}>
              <MdLocationOn />
            </IconContext.Provider>
            <p>Helsinki</p>
          </div>
        </>
      ) : (
        <Loading type={"bubbles"} color={"#ffffff"} />
      )}
    </div>
  );
};

export default Aside;
