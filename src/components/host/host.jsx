import React from "react";
import PropTypes from 'prop-types';

function Host({host: {name, avatar, description, pro}}) {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper${pro ? ` property__avatar-wrapper--pro` : ``}`}>
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        {description.map((text, i) => <p key={`${name}-text-${i}`} className="property__text">
          {text}
        </p>)}
      </div>
    </div>
  );
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    pro: PropTypes.bool
  })
};

export default Host;
