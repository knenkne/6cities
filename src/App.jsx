import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Main from "./pages/main.jsx";
import SignIn from "./pages/sign-in.jsx";
import Room from "./pages/room.jsx";

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main
            offers={props.offers}
            cities={props.cities}
            city={props.city}
            userName={props.userName}
          />
        </Route>
        <Route exact path="/login">
          <SignIn city={props.city} />
        </Route>
        <Route
          path="/offer/:id"
          component={(routerProps) => (
            <Room
              serName={props.userName}
              offer={props.offers.find(
                  (offer) => offer.id === parseInt(routerProps.match.params.id, 10)
              )}
            />
          )}
        />
        <Route exact path="/dev-component">
          {/* <Component /> */}
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string,
        type: PropTypes.string,
        bedrooms: PropTypes.number,
        adults: PropTypes.number,
        price: PropTypes.number,
        premium: PropTypes.bool,
        rating: PropTypes.number,
        bookmarked: PropTypes.bool
      })
  ),
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  userName: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};
