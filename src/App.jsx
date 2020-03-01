import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from './store/actions/actions.js';


import Main from "./pages/main.jsx";
import SignIn from "./pages/sign-in.jsx";
import Room from "./pages/room.jsx";

function App(props) {
  props.initCities(props.offers);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={SignIn}/>
        <Route path="/offer/:id" component={Room}/>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  offers: PropTypes.array,
  initCities: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  initCities(offers) {
    dispatch(ActionCreator.initCities(offers));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
