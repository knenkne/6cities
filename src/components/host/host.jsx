import React from 'react';
import PropTypes from 'prop-types';

function Host({name, isPro, description, avatarUrl}) {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper${isPro ? ` property__avatar-wrapper--pro` : ``}`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  isPro: PropTypes.bool,
  description: PropTypes.string
};

export default Host;
