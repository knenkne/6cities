import React from "react";
import PropTypes from 'prop-types';

import Tab from '../tab/tab.jsx';
import OffersFilled from './offers-filled.jsx';
import OffersEmpty from './offers-empty.jsx';

import {connect} from 'react-redux';


function Offers(props) {
  const offers = props.offers.filter((offer) => offer.city.name === props.currentCity);
  return (
    <main className={`page__main page__main--index page__main--index-empty${props.offers.length > 0 ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {props.cities.map((city) => <Tab city={city} key={city} />)}
          </ul>
        </section>
      </div>
      {offers.length > 0 ? <OffersFilled offers={offers} city={props.currentCity} /> : <OffersEmpty city={props.currentCity} />}
    </main>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  currentCity: PropTypes.string
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  cities: state.cities,
  offers: state.currentOffers
});

export {Offers};
export default connect(mapStateToProps)(Offers);


