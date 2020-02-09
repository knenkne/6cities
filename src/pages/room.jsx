import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/header.jsx';
import Gallery from '../components/gallery/gallery.jsx';

function Room(props) {
  return (
    <div className="page">
      <Header userName={props.userName} />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={props.images} />
        </section>
      </main>
    </div>
  );
}

Room.propTypes = {
  userName: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};

export default Room;
