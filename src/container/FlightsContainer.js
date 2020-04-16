import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import * as ENDPOINTS from "../config/endpoints";
import axios from "../config/axios";
import FlightsCard from "../components/FlightsCard";
import { BookingBackgroundContainer } from "../Theme";
import FlightResultCard from "../components/FlightResultCard";
class FlightsContainer extends Component {
  constructor(props) {
    super(props);
    this.flightDetails = this.props.location.flightDetails;
    if (!this.flightDetails) {
      return this.props.history.push({
        pathname: "/booking"
      });
    }
  }

  render() {
    return (
      <Fragment>
        <BookingBackgroundContainer>
          <FlightsCard title="Book Flights">
            <FlightResultCard flightDetails={this.flightDetails} />
          </FlightsCard>
        </BookingBackgroundContainer>
      </Fragment>
    );
  }
}

export default FlightsContainer;
