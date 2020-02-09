import React from "react";
import PropTypes from 'prop-types';

import Tab from '../tab/tab.jsx';
import OffersFilled from './offers-filled.jsx';
import OffersEmpty from './offers-empty.jsx';


function Offers(props) {
  return (
    <main className={`page__main page__main--index page__main--index-empty${props.offers.length > 0 ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {props.cities.map((city) => <Tab current={props.city === city} city={city} key={city} />)}
          </ul>
        </section>
      </div>
      {props.offers.length > 0 ? <OffersFilled offers={props.offers} city={props.city} /> : <OffersEmpty city={props.city} />}
    </main>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string
};

export default Offers;


