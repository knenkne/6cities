import React from 'react';

import Header from '../components/header/header.jsx';
import Offers from '../components/offers/offers.jsx';

function Main() {
  return (
    <div className={`page page--gray page--main`}>
      <Header />
      <Offers />
    </div>
  );
}

export default Main;


