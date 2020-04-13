import { Row, Col } from "antd";
import React, { Fragment } from "react";

export default props => {
  console.log("---", props);

  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        {props.flightDetails && props.flightDetails.data.data.length
          ? props.flightDetails.data.data.map((element, index) => {
              return (
                <Col
                  span={7}
                  offset={1}
                  style={{
                    backgroundColor: "#FFF",
                    height: "100px",
                    lineHeight: "120px",
                    marginTop: "20px",
                    borderRadius: "6px"
                  }}
                />
              );
            })
          : null}
      </Row>
    </Fragment>
  );
};
