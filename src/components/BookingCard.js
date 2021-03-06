import React, { Fragment } from "react";
import { Card } from "antd";
import { BookingContainer } from "../Theme";

export default props => {
  //Card in styled components
  return (
    <BookingContainer title={props.title}>{props.children}</BookingContainer>
  );
};
