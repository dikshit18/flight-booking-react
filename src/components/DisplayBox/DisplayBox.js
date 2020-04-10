import React, { Fragment } from "react";
import { DisplayBox } from "../../Theme";

export default props => {
  const { width, marginLeft, onclick, onblur } = props;
  return (
    <DisplayBox
      contenteditable="true"
      onClick={onclick}
      onBlur={onblur}
      style={{ width, marginLeft }}
    >
      {props.children}
    </DisplayBox>
  );
};
