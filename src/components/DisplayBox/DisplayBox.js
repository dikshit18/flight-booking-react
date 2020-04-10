import React, { Fragment } from "react";
import { DisplayBox } from "../../Theme";

export default props => {
  const { width, marginLeft } = props;
  return (
    <DisplayBox contenteditable="true" style={{ width, marginLeft }}>
      {props.children}
    </DisplayBox>
  );
};
