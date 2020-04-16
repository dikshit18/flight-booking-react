import { Row, Col } from "antd";
import React, { Fragment } from "react";
import moment from "moment";
export default props => {
  const flightDetails = props.flightDetails.data;

  const getRegionalDate = dateTimeISO =>
    moment(new Date(dateTimeISO).getTime()).format("HH:mm");

  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        {flightDetails && flightDetails.data.length
          ? flightDetails.data.map(element => {
              return (
                <Col
                  key={element.id}
                  span={7}
                  offset={1}
                  style={{
                    backgroundColor: "#FFF",
                    height: "100px",
                    // lineHeight: "120px",
                    marginTop: "20px",
                    borderRadius: "6px"
                  }}
                >
                  <Row justify="space-around">
                    <Col span={4}>
                      <strong style={{ fontSize: "25px" }}>
                        {getRegionalDate(
                          element.itineraries[0].segments[0].departure.at
                        )}
                      </strong>
                      <p style={{ textAlign: "center" }}>
                        {element.itineraries[0].segments[0].departure.iataCode}
                      </p>
                    </Col>
                    <Col span={4}>
                      <p
                        style={{
                          paddingTop: "10px"
                        }}
                      >
                        {element.itineraries[0].duration}
                        <br />
                        <span style={{ paddingLeft: "6px" }}>
                          {element.itineraries[0].segments[0].carrierCode}-
                          {element.itineraries[0].segments[0].aircraft.code}
                        </span>
                      </p>
                    </Col>
                    <Col span={4}>
                      <strong style={{ fontSize: "25px" }}>
                        {getRegionalDate(
                          element.itineraries[0].segments[0].arrival.at
                        )}
                      </strong>
                      <p style={{ textAlign: "center" }}>
                        {element.itineraries[0].segments[0].arrival.iataCode}
                      </p>
                    </Col>
                    <Col span={4}>
                      <p
                        style={{
                          fontSize: "21px",
                          paddingTop: "3px"
                        }}
                      >
                        ₹{element.price.total.split(".")[0]}
                      </p>
                    </Col>
                  </Row>
                </Col>
              );
            })
          : null}
      </Row>
    </Fragment>
  );
};
