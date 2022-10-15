import React from "react";

import "./Aside.css";

import shower from "../../assets/Shower.png";

const Aside = () => {
  return (
    <div className="Aside">
      <div>
        <input type="text" placeholder="Search for places" />
        <div className="geo"></div>
      </div>
      <div className="cloud-with-bg">
        <div>
          <img src={shower} alt="" />
        </div>
      </div>
      <div>
        <p>
          <span>15</span> <span>&deg;C</span>
        </p>
      </div>
      <div>
        <p>Shower</p>
      </div>
      <p>Today &middot; Fri, 5 Jun</p>
      <p>Helsinki</p>
    </div>
  );
};

export default Aside;
