import React from "react";
import PropTypes from 'prop-types';

import Offer from '../offer/offer.jsx';
import Map from '../map/map.jsx';

class OffersFilled extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(e) {
    e.persist();
    e.preventDefault();


    this.setState(() => {
      return {
        currentOffer: e.target
      };
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
              {this.props.offers.map((offer) => <Offer {...offer} key={offer.name} handleMouseEnter={this.handleMouseEnter} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <Map mini={true} offers={this.props.offers}/>
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
