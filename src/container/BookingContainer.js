import React, { Component, Fragment } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import * as ENDPOINTS from "../config/endpoints";
import axios from "../config/axios";
import BookingCard from "../components/BookingCard";
import { BookingBackgroundContainer } from "../Theme";
import BookingForm from "../components/Form";
import { getAccessToken, getFlights } from "../config/flightsApi";
import * as LOCALSTORAGE from "../config/localStorage";
import moment from "moment";
import "../Theme/loader.css";

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports: [],
      clickedComponent: "",
      flightDetails: null,
      isLoading: false
    };
  }

  async componentDidMount() {
    console.log("==>", this.state.isLoading);

    await this.setState({ isLoading: true });
    console.log("==>", this.state.isLoading);

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
    await this.setState({ isLoading: false });
  }

  formSubmission = async values => {
    console.log("=>", this.state.isLoading);
    await this.setState({ isLoading: true });
    console.log("=>", this.state.isLoading);

    const { from, to, adults, datePicker } = values;
    const fromDate = moment(new Date(datePicker)).format("YYYY-MM-DD");
    const flightDetails = await getFlights(from, to, fromDate, adults);
    this.props.history.push({
      pathname: "/flights",
      flightDetails
    });
  };

  render() {
    return (
      <Fragment>
        <BookingBackgroundContainer>
          <BookingCard title="Search flight">
            <div className={this.state.isLoading ? "loader" : ""}>
              <BookingForm
                airports={this.state.airports}
                formSubmission={this.formSubmission}
              />
            </div>
          </BookingCard>
        </BookingBackgroundContainer>
      </Fragment>
    );
  }
}

export default withRouter(BookingContainer);
