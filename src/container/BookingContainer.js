import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import * as ENDPOINTS from "../config/endpoints";
import axios from "../config/axios";
import BookingCard from "../components/BookingCard";
import { BookingBackgroundContainer } from "../Theme";
import BookingForm from "../components/Form";
import { getAccessToken, getFlights } from "../config/flightsApi";
import * as LOCALSTORAGE from "../config/localStorage";
import moment from "moment";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports: [],
      clickedComponent: ""
    };
  }

  async componentDidMount() {
    const airports = await axios.get(ENDPOINTS.airports);
    if (airports.data.length) {
      this.setState({
        airports: [].concat(...airports.data)
      });
    }
    const accessToken = await getAccessToken();
    if (accessToken.data) {
      LOCALSTORAGE.setToLocalStorage(
        "accessToken",
        accessToken.data.access_token
      );
    }
  }

  async formSubmission(values) {
    console.log(values);
    const { from, to, passengers, datePicker } = values;
    const fromDate = moment(new Date(datePicker[0])).format("YYYY-MM-DD");
    const toDate = moment(new Date(datePicker[1])).format("YYYY-MM-DD");
    const flightDetails = await getFlights(
      from,
      to,
      fromDate,
      toDate,
      passengers
    );
    // if (flightDetails.data) {
    //   this.state;
    // }
  }

  render() {
    return (
      <Fragment>
        <BookingBackgroundContainer>
          <BookingCard>
            <BookingForm
              airports={this.state.airports}
              formSubmission={this.formSubmission}
            />
          </BookingCard>
        </BookingBackgroundContainer>
      </Fragment>
    );
  }
}

export default withRouter(Container);
