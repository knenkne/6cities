import React from "react";
import PropTypes from 'prop-types';

import Offer from '../offer/offer.jsx';
import Map from '../map/map.jsx';

class OffersFilled extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusedOffer: null
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    e.persist();
    e.preventDefault();

    this.setState({
      focusedOffer: parseInt(e.currentTarget.dataset.id, 10)
    });
  }

  handleMouseLeave(e) {
    e.persist();
    e.preventDefault();

    this.setState({
      focusedOffer: null
    });
  }

  render() {
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{this.props.offers.length} places to stay in {this.props.city}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {this.props.offers.map((offer) => <Offer {...offer} key={offer.id} handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}/>)}
            </div>
          </section>
          <div className="cities__right-section">
            <Map mini offers={this.props.offers} focusedOffer={this.state.focusedOffer}/>
          </div>
        </div>
      </div>
    );
  }
}

OffersFilled.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  }))
};

export default OffersFilled;
