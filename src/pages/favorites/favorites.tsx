import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Offer} from '../../common/interfaces';
import {getFavorites} from '../../store/reducer/offers/selectors';
import Header from '../../components/header/header';
import List from '../../components/favorites-list/favorites-list';


const Favorites: React.FC<{favorites: Offer[]}> = ({favorites}) => {
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
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
