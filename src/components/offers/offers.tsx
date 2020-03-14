import * as React from 'react';
import {connect} from 'react-redux';

import {Offer, cityName} from '../../types';
import {getOffers} from '../../store/reducers/offers/selectors';
import {getCities} from '../../store/reducers/cities/selectors';
import {getCity} from '../../store/reducers/cities/selectors';

import Tab from '../tab/tab';
import OffersFilled from './offers-filled';
import OffersEmpty from './offers-empty';


interface Props {
  offers: Offer[];
  cities: string[];
  currentCity: cityName;
}

const Offers: React.FC<Props> = ({offers, cities, currentCity}) => {
  return (
    <main className={`page__main page__main--index page__main--index-empty${offers.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <Tab name={city} key={city} />)}
          </ul>
        </section>
      </div>
      {offers.length ? <OffersFilled offers={offers} city={currentCity}/> : <OffersEmpty city={currentCity} />}
    </main>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state),
  cities: getCities(state),
  offers: getOffers(state)
});

export default connect(mapStateToProps)(Offers);


