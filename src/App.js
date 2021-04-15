import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";

// import Sidebar from "./components/sidebar/Sidebar";
// import About from "./components/about/About";
// import Education from "./components/Education/Education";
// import Interest from "./components/skills/Interest";
// import CarouselImages from "./components/carousel/CarouselImages.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="main">
            <Navbar />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
