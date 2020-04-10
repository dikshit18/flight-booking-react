import styled, { css } from "styled-components";
import { Card, Layout, Select } from "antd";

export const BookingBackgroundContainer = styled.div`
  background: #2c3e50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4ca1af,
    #2c3e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4ca1af,
    #2c3e50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: hidden;
  height: 500px;
`;

export const BookingContainer = styled(Card)`
  background-color: #fff;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 70px;
  height: 300px;
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
