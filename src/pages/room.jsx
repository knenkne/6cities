import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/header.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import Intro from '../components/offer-intro/offer-intro.jsx';
import Features from '../components/features/features.jsx';
import Host from '../components/host/host.jsx';

function Room(props) {
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

Room.propTypes = {
  userName: PropTypes.string,
  offer: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      pro: PropTypes.bool
    })
  })
};

export default Room;
