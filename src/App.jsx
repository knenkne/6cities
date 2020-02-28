import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import * as actions from './store/actions/actions.js';

import Main from "./pages/main.jsx";
import SignIn from "./pages/sign-in.jsx";
import Room from "./pages/room.jsx";

function App(props) {
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
        <Route exact path="/offer/:id" component={Room}/>
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

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
});

export default connect(mapStateToProps)(App);
