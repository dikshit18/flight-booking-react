import React from "react";
import { Menu, Dropdown } from "antd";

const popularAirports = [
  {
    iata: "DEL",
    lon: "77.10079",
    iso: "IN",
    status: 1,
    name: "Indira Gandhi International Airport",
    continent: "AS",
    type: "airport",
    lat: "28.556555",
    size: "large"
  },
  {
    iata: "PNQ",
    lon: "73.920555",
    iso: "IN",
    status: 1,
    name: "Pune Airport",
    continent: "AS",
    type: "airport",
    lat: "18.581388",
    size: "medium"
  },
  {
    iata: "BKK",
    lon: "100.752045",
    iso: "TH",
    status: 1,
    name: "Suvarnabhumi Airport",
    continent: "AS",
    type: "airport",
    lat: "13.693062",
    size: "large"
  }
];

const cityModal = props => {
  const menu = (
    <Menu>
      {popularAirports.map((ap, key) => {
        return (
          <Menu.Item style={{ width: "280px" }} key={key}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p>{ap.iata}</p>
            </div>
            <p style={{ textAlign: "right" }}>{ap.name}</p>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Hover me
      </a>
    </Dropdown>
  );
};

export default cityModal;
