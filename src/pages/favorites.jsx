import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/header/header.jsx';
import List from '../components/favorites-list/favorites-list.jsx';

const Favorites = ({favorites}) => {
  const isExists = favorites.length;
  return (
    <div className={`page${isExists ? `` : ` page--favorites-empty`}`}>
      <Header/>
      <main className={`page__main page__main--favorites${isExists ? `` : ` page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          <section className={`favorites${isExists ? `` : ` favorites--empty`}`}>
            {isExists ? <h1 className="favorites__title">Saved listing</h1> : <h1 className="visually-hidden">Favorites (empty)</h1>}
            <List favorites={favorites}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.offers.favorites
});

export default connect(mapStateToProps)(Favorites);
