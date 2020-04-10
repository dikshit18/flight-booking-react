import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import * as ENDPOINTS from "../constants/endpoints";
import axios from "../constants/axios";
import BookingCard from "../components/BookingCard/BookingCard";
import { BookingBackgroundContainer } from "../Theme";
import { Row, Col, Input } from "antd";
import DisplayBox from "../components/DisplayBox/DisplayBox";
import CityModal from "../components/CityModal/CityModal";
import cityModal from "../components/CityModal/CityModal";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports: [],
      clickedComponent: ""
    };
  }

  async componentDidMount() {
    const airports = await axios.get(ENDPOINTS.airports);
    console.log("Got the Airport Data...", airports);
    if (airports.data.length) {
      this.setState({
        airports: [].concat(...airports.data)
      });
    }
    console.log(this.state.airports);
  }

  onclick = divId => {
    let clickedComponent;
    switch (divId) {
      case "#div1":
        clickedComponent = <CityModal airports={this.state.airports} />;
        this.setState({
          clickedComponent
        });
        break;
      case "#div2":
        clickedComponent = <CityModal flights={this.state.airports} />;
        break;
    }
    console.log(this.state.clickedComponent);
  };
  onblur = divId => {};

  render() {
    return (
      <Fragment>
        <BookingBackgroundContainer>
          <BookingCard>
            <Row justify="center">
              <Col span={4}>
                <DisplayBox width="250px" onclick={this.onclick} id="#div1">
                  {this.state.clickedComponent}
                </DisplayBox>
              </Col>
              <Col span={4} push={1}>
                <DisplayBox
                  width="250px"
                  marginLeft="8px"
                  onclick={this.onclick}
                  onblur={this.onblur}
                  id="#div2"
                >
                  Hi
                </DisplayBox>
              </Col>
              <Col span={4} push={2}>
                <DisplayBox
                  width="150px"
                  marginLeft="16px"
                  onclick={this.onclick}
                  onblur={this.onblur}
                  id="#div3"
                >
                  Hi
                </DisplayBox>
              </Col>
              <Col span={4} push={1}>
                <DisplayBox
                  width="150px"
                  marginLeft="21px"
                  onclick={this.onclick}
                  onblur={this.onblur}
                  id="#div4"
                >
                  Hi
                </DisplayBox>
              </Col>
              <Col span={4}>
                <DisplayBox
                  width="220px"
                  marginLeft="25px"
                  onclick={this.onclick}
                  onblur={this.onblur}
                  id="#div5"
                >
                  Hi
                </DisplayBox>
              </Col>
            </Row>
          </BookingCard>
        </BookingBackgroundContainer>
      </Fragment>
    );
  }
}

export default withRouter(Container);
