import styled, { css } from "styled-components";
import { Card, Layout, Select } from "antd";

export const BookingBackgroundContainer = styled.div`
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: hidden;
  height: 1200px;
`;

export const BookingContainer = styled(Card)`
  background-color: #fff;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 70px;
  height: 600px;
  border-radius: 10px;
`;

export const DisplayBox = styled.div`
  height: 110px;
  border-radius: 5px;
  border: 0.5px solid;
`;

export const CityModal = styled(Select)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FlightsContainer = styled(Card)`
  background-color: #e0e0e0;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 70px;
  border-radius: 10px;
  overflow: auto;
`;
