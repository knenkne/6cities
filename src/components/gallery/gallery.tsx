import * as React from 'react';


const Gallery: React.FC<{images: string[]}> = ({images}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => {
          return (
            <div className="property__image-wrapper" key={image}>
              <img className="property__image" src={image} alt="Photo studio" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Gallery);
