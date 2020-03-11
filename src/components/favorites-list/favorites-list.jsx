import React from 'react';
import PropTypes from 'prop-types';

import Offer from '../../components/offer/offer.jsx';
import groupBy from '../../utils/group-by/group-by.js';

const FavoritesList = ({favorites}) => {
  const isExists = favorites.length;
  const citiesGroups = groupBy(favorites, `city`);

  if (isExists) {
    return (
      <ul className="favorites__list">
        {Object.entries(citiesGroups).map(([city, offers]) => {
          return (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer) => <Offer {...offer} key={offer.id} mini />)}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
    </div>
  );
};

FavoritesList.propTypes = {
  favorites: PropTypes.array
};

export default React.memo(FavoritesList);
