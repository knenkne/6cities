import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/actions/actions.js';

function Tab(props) {
  const handleClick = () => props.onTabClick(props.city);
  return (
    <li className="locations__item" onClick={handleClick}>
      <a className={`locations__item-link tabs__item${props.currentCity === props.city ? `tabs__item tabs__item--active` : ``}`} href="#">
        <span>{props.city}</span>
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
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(name) {
    dispatch(ActionCreator.setCity(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

