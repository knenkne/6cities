import * as React from 'react';

const Features: React.FC<{goods: string[]}> = ({goods}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good) => <li key={good} className="property__inside-item">
          {good}
        </li>)}
      </ul>
    </div>
  );
};

export default React.memo(Features);
