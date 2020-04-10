import React, { Fragment } from "react";
import { DisplayBox } from "../../Theme";

export default props => {
  const { width, marginLeft, onclick, onblur } = props;
  return (
    <DisplayBox
      contenteditable="true"
      onClick={id => props.onclick(props.id)}
      onBlur={() => props.onBlur()}
      style={{ width, marginLeft }}
    >
      {props.children}
    </DisplayBox>
  );
};
