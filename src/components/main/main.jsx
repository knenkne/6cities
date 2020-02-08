import React from "react";
import PropTypes from 'prop-types';

import Tab from '../tab/tab.jsx';
import MainFilled from './main-filled.jsx';
import MainEmpty from './main-empty.jsx';


function Main(props) {
  return (
    <div className={`page page--gray page--main ${props.offers.length > 0 ? `` : ` page__main--index-empty`}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
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
  city: PropTypes.string
};

export default Main;


