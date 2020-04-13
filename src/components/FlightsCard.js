import React, { Fragment } from "react";
import { Card } from "antd";
import { FlightsContainer } from "../Theme";

export default props => {
  //Card in styled components
  return (
    <FlightsContainer title="Book Flights">{props.children}</FlightsContainer>
  );
};
