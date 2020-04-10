import React, { Component } from "react";
import "./App.css";

import BookingPage from "./pages/BookingPage";
import BookingCard from "./components/BookingCard/BookingCard";
import BookingContainer from "./container/BookingContainer";
import { withRouter } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return routes();
  }
}

export default App;
