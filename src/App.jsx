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
      <Room userName={props.userName} images={props.offers[0].images} offer={props.offers[0]} />
    </React.Fragment>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    type: PropTypes.string,
    bedrooms: PropTypes.number,
    adults: PropTypes.number,
    price: PropTypes.number,
    premium: PropTypes.bool,
    rating: PropTypes.number,
    bookmarked: PropTypes.bool
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  userName: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};
