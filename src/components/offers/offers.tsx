import * as React from 'react';
import {connect} from 'react-redux';

import {city} from '../../types';
import {Offer} from '../../interfaces';
import {getOffers} from '../../store/reducers/offers/selectors';
import {getCities} from '../../store/reducers/cities/selectors';
import {getCity} from '../../store/reducers/cities/selectors';

import Tab from '../tab/tab';
import OffersFilled from './offers-filled';
import OffersEmpty from './offers-empty';


interface Props {
  offers: Offer[];
  cities: string[];
  currentCity: city;
}

const Offers: React.FC<Props> = ({offers, cities, currentCity}) => {
  return (
    <main className={`page__main page__main--index page__main--index-empty${offers.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((name) => <Tab name={name} key={name} />)}
          </ul>
        </section>
      </div>
      {offers.length > 0 ? <OffersFilled offers={offers} city={currentCity}/> : <OffersEmpty name={currentCity} />}
    </main>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state),
  cities: getCities(state),
  offers: getOffers(state)
});

export default connect(mapStateToProps)(Offers);


