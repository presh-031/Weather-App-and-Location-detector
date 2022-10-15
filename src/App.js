import axios from "axios";
import { useState, useEffect } from "react";

import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Aside />
      <Main />
    </div>
  );
};

export default App;
