import React from 'react';
import PropTypes from 'prop-types';

function Gallery({images}) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => {
          return (
            <div className="property__image-wrapper" key={`Image №${i}`}>
              <img className="property__image" src={image} alt="Photo studio" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
