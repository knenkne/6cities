import React from "react";
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Tab from '../tab/tab.jsx';
import MainFilled from './main-filled.jsx';
import MainEmpty from './main-empty.jsx';


function Main(props) {
  return (
    <div className={`page page--gray page--main`}>
      <Header userName={props.userName} />
      <main className={`page__main page__main--index page__main--index-empty${props.offers.length > 0 ? `` : ` page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {props.cities.map((city) => <Tab current={props.city === city} city={city} key={city} />)}
            </ul>
          </section>
        </div>
        {props.offers.length > 0 ? <MainFilled offers={props.offers} city={props.city} /> : <MainEmpty city={props.city} />}
      </main>
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


