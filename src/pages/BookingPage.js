import React, { Fragment, useState } from "react";
import BookingCard from "../components/BookingCard/BookingCard";
import { BookingBackgroundContainer } from "../Theme";
import { Row, Col, Input } from "antd";
import DisplayBox from "../components/DisplayBox/DisplayBox";
import CityModal from "../components/CityModal/CityModal";
const h1 = "<p>Hlo</p>";
const BookingPage = props => {
  const [openFromCity, closeFromCity] = useState(false);

  const openFromCityDrawer = () => {
    console.log("Hsbfkjs");
    closeFromCity(true);
  };
  const closeFromCityDrawer = () => {
    console.log("Hi111121");

    closeFromCity(false);
  };
  return (
    <Fragment>
      <BookingBackgroundContainer>
        <BookingCard>
          <Row justify="center">
            <Col span={4}>
              <DisplayBox
                width="250px"
                onclick={openFromCityDrawer}
                onblur={closeFromCityDrawer}
              >
                <CityModal open={openFromCity} close={closeFromCityDrawer} />
              </DisplayBox>
            </Col>
            <Col span={4} push={1}>
              <DisplayBox width="250px" marginLeft="8px">
                Hi
              </DisplayBox>
            </Col>
            <Col span={4} push={2}>
              <DisplayBox width="150px" marginLeft="16px">
                Hi
              </DisplayBox>
            </Col>
            <Col span={4} push={1}>
              <DisplayBox width="150px" marginLeft="21px">
                Hi
              </DisplayBox>
            </Col>
            <Col span={4}>
              <DisplayBox width="220px" marginLeft="25px">
                Hi
              </DisplayBox>
            </Col>
          </Row>
        </BookingCard>
      </BookingBackgroundContainer>
    </Fragment>
  );
};
export default BookingPage;
