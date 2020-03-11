import React from 'react';
import PropTypes from 'prop-types';

function Features({features}) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features.map((feature) => <li key={feature} className="property__inside-item">
          {feature}
        </li>)}
      </ul>
    </div>
  );
}

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string)
};

export default React.memo(Features);
