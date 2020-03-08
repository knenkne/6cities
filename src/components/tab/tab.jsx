import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCity} from '../../store/reducers/cities/selectors.js';
import {ActionCreator} from '../../store/actions/actions.js';

function Tab({city, currentCity, onTabClick}) {
  const handleClick = () => onTabClick(city);
  return (
    <li className="locations__item" onClick={handleClick}>
      <a className={`locations__item-link tabs__item${currentCity === city ? `tabs__item tabs__item--active` : ``}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

Tab.propTypes = {
  city: PropTypes.string,
  currentCity: PropTypes.string,
  onTabClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(name) {
    dispatch(ActionCreator.setCity(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

