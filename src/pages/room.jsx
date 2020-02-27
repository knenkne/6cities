import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/header.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import Intro from '../components/offer-intro/offer-intro.jsx';
import Features from '../components/features/features.jsx';
import Host from '../components/host/host.jsx';
import Reviews from '../components/reviews/reviews.jsx';
import Map from '../components/map/map.jsx';
import Offers from '../components/offers/offers-nearby.jsx';

import {offers} from '../mocks/offers.js';

function Room(props) {
  const nearbyOffers = offers.filter((offer) => offer.id !== props.offer.id);
  return (
    <div className="page">
      <Header userName={props.userName} />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={props.offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              <Intro {...props.offer} />
              <Features features={props.offer.features}/>
              <Host host={props.offer.host}/>
              <Reviews reviews={props.offer.reviews}/>
            </div>
          </div>
          <Map offers={nearbyOffers} currentOffer={props.offer}/>
        </section>
        <Offers offers={nearbyOffers}/>
      </main>
    </div>
  );
}

Room.propTypes = {
  userName: PropTypes.string,
  offer: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      pro: PropTypes.bool
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string
      }),
      review: PropTypes.shape({
        text: PropTypes.string,
        rating: PropTypes.number,
        date: PropTypes.string
      })
    }))
  })
};

export default Room;
