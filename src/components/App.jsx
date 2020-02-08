import React from 'react';

import Main from './main/main.jsx';

export default function App(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <Main offers={props.offers} cities={props.cities} city={props.city} />
  );
}

