import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/header.jsx';
import Offers from '../components/offers/offers.jsx';

function Main(props) {
  return (
    <div className={`page page--gray page--main`}>
      <Header userName={props.userName} />
      <Offers />
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  userName: PropTypes.string
};

export default Main;


