import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookingContainer from "./container/BookingContainer";
import FlightsContainer from "./container/FlightsContainer";

import * as ROUTES from "./config/routeName";

const routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={ROUTES.BOOKING_PAGE}
        render={() => <BookingContainer />}
      />
      <Route
        exact
        path={ROUTES.FLIGHTS_LIST}
        render={props => <FlightsContainer {...props} />}
      />
      <Route path="*" render={props => <Redirect to={ROUTES.FLIGHTS_LIST} />} />
    </Switch>
  );
};

export default routes;
