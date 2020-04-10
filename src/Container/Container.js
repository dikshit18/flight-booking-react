import React, { Component } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import * as ROUTES from "../constants//routeName";
import BookingPage from "../pages/BookingPage";
class Container extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.BOOKING_PAGE}
            render={props => <BookingPage {...props} />}
          />
          <Route
            path="*"
            render={props => <Redirect to={ROUTES.HOME_VIEW} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default Container;
