import React from "react";
import PropTypes from 'prop-types';

import Offer from '../offer/offer.jsx';

function MainFilled(props) {
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in {props.city}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {props.names.map((name) => <Offer name={name} key={name} />)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

MainFilled.propTypes = {
  city: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string)
};

export default MainFilled;
