import React from 'react';
import PropTypes from 'prop-types';

import Main from './pages/main.jsx';
import SignIn from './pages/sign-in.jsx';
import Room from './pages/room.jsx';

export default function App(props) {
  return (
    <React.Fragment>
      <Main offers={props.offers} cities={props.cities} city={props.city} userName={props.userName} />
      <SignIn city={props.city} />
      <Room userName={props.userName} images={props.images} />
    </React.Fragment>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  userName: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};
