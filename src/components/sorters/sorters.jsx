import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getSorting} from '../../store/reducers/offers/selectors.js';
import {ActionCreator} from '../../store/actions/actions.js';

import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const sorters = [
  {
    name: `id`,
    title: `Popular`
  },
  {
    name: `toHigh`,
    title: `Price: low to high`
  },
  {
    name: `toLow`,
    title: `Price: high to low`
  },
  {
    name: `rating`,
    title: `Top rated first`
  }];


function Sorters({currentSorting, isActive, onClick, onSortClick}) {
  const handleClick = (e) => {
    onSortClick(e);
    onClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onClick}>
        {sorters.find((sorter) => sorter.name === currentSorting).title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isActive ? ` places__options--opened` : ``}`}>
        {sorters.map(({name, title}) => (<li key={name}
          className={`places__option${currentSorting === name ? ` places__option--active` : ``}`}
          tabIndex="0"
          data-name={name}
          onClick={handleClick}>
          {title}
        </li>))}
      </ul>
    </form>
  );
}

Sorters.propTypes = {
  currentSorting: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onSortClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentSorting: getSorting(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick(e) {
    dispatch(ActionCreator.setSorting(e.currentTarget.dataset.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(Sorters));
