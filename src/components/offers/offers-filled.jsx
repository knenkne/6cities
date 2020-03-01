import React from "react";
import PropTypes from 'prop-types';

import Offer from '../offer/offer.jsx';
import Map from '../map/map.jsx';
import Sorters from '../sorters/sorters.jsx';

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
            <Sorters/>
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
