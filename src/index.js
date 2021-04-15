import React from "react";
import ReactDOM from "react-dom";

// import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
// import "./img/icons/css/ionicons.css";
// import "./img/font-awesome/css/font-awesome.css";
// import "lightbox2/dist/css/lightbox.min.css";
import "./style.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Navbar from "./components/Navbar";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";
import Intro from "./components/Intro";
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Intro />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
