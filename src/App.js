import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./App.css";

import routes from "./routes";

class App extends Component {
  render() {
    return routes();
  }
}

export default App;
