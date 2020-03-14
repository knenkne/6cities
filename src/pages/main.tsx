import * as React from 'react';

import Header from '../components/header/header';
import Offers from '../components/offers/offers';

const Main: React.FC = () => {
  return (
    <div className={`page page--gray page--main`}>
      <Header />
      <Offers />
    </div>
  );
};

export default React.memo(Main);


