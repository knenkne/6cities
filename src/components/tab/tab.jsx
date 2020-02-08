import React from "react";
import PropTypes from 'prop-types';

function Tab(props) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item${props.current ? `tabs__item tabs__item--active` : ``}`} href="#">
        <span>{props.city}</span>
      </a>
    </li>
  );
}

Tab.propTypes = {
  city: PropTypes.string,
  current: PropTypes.bool
};

export default Tab;

