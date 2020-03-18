import * as React from 'react';

import {Offer} from '../../common/interfaces';
import {city} from '../../common/types';
import Card from '../../components/offer/offer';
import groupBy from '../../utils/group-by/group-by';


const FavoritesList: React.FC<{favorites: Offer[]}> = ({favorites}) => {
  const isExists = favorites.length;
  const citiesGroups = groupBy(favorites, `city.name`);

  if (isExists) {
    return (
      <ul className="favorites__list">
        {Object.entries(citiesGroups).map(([name, offers]: [city, Offer[]]) => {
          return (
            <li className="favorites__locations-items" key={name}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer: Offer) => <Card {...offer} key={offer.id} mini />)}
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

export default React.memo(FavoritesList);
