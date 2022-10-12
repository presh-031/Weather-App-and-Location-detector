import React from "react";
import ReactDOM from "react-dom/client";

// Importing normalize, then index.css, before any more specific styles from App and its components.
import "normalize.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // {/* </React.StrictMode> */}
);
