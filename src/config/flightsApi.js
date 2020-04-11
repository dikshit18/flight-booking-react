const dotenv = require("dotenv");
import axios from "../config/axios";
const qs = require("querystring");
import * as ENDPOINTS from "../config/endpoints";
export const getAccessToken = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const payload = {
      client_id: "JI16JWJN1VRcKlCj4Mj6FIgwDpQr1VvJ",
      client_secret: "0Dl5y26wtnTSVR7I",
      grant_type: "client_credentials"
    };
    const response = await axios.post(
      ENDPOINTS.getAccessToken,
      qs.stringify(payload),
      config
    );
    return response;
  } catch (error) {
    return {};
  }
};

export const getFlights = async (from, to, departDate, returnDate, adults) => {
  const max = 50;
  const url =
    ENDPOINTS.flightDetails +
    `?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${departDate}&returnDate=${returnDate}&adults=${adults}&max=${max}`;
  const config = {
    Headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  };
  console.log("Config", config);
  try {
    const response = await axios.get(url, {
      params: {},
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
    return response;
  } catch (e) {
    return {};
  }
};
