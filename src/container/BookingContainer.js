import React, { Component } from "react";
import BookingPage from "../pages/BookingPage";
import { withRouter } from "react-router-dom";
import * as ENDPOINTS from "../constants/endpoints";
import axios from "../constants/axios";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports: []
    };
  }

  async componentDidMount() {
    const airports = await axios.get(ENDPOINTS.airports);
    console.log("Got the Airport Data...", airports);
    if (airports.data.length) {
      this.setState({
        airports
      });
    }
  }

  render() {
    return <BookingPage />;
  }
}

export default withRouter(Container);
