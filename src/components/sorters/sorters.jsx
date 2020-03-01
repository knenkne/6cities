import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/actions/actions.js';

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

class Sorters extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      currentSorting: {
        name: `id`,
        title: `Popular`
      }
    };

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleMenuToggle() {
    this.setState((prevState) => ({isOpened: !prevState.isOpened}));
  }

  handleItemClick(e) {
    this.setState({currentSorting: {
      name: e.currentTarget.dataset.name,
      title: e.currentTarget.textContent
    }});
    this.props.sort(this.props.offers, e.currentTarget.dataset.name);
    this.handleMenuToggle();
  }

  render() {
    const {isOpened, currentSorting} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleMenuToggle}>
          {currentSorting.title}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom${isOpened ? ` places__options--opened` : ``}`}>
          {sorters.map(({name, title}) => (<li key={name}
            className={`places__option${this.state.currentSorting.name === name ? ` places__option--active` : ``}`}
            tabIndex="0"
            data-name={name}
            onClick={this.handleItemClick}>
            {title}
          </li>))}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.currentOffers
});

const mapDispatchToProps = (dispatch) => ({
  sort(offers, type) {
    dispatch(ActionCreator.sortOffers(offers, type));
  },
});

Sorters.propTypes = {
  offers: PropTypes.array,
  sort: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorters);
