import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../store/actions/actions.js';

import Header from '../components/header/header.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import Intro from '../components/offer-intro/offer-intro.jsx';
import Features from '../components/features/features.jsx';
import Host from '../components/host/host.jsx';
import Reviews from '../components/reviews/reviews.jsx';
import Map from '../components/map/map.jsx';
import Offers from '../components/offers/offers-nearby.jsx';

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.init(this.props.offers, this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.currentOffer) && (nextProps.match.params.id !== this.props.currentOffer.id)) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`
      });

      this.props.init(this.props.offers, nextProps.match.params.id);
    }
  }

  render() {
    const {currentOffer, offers} = this.props;

    if (!currentOffer) {
      return null;
    }

    const nearbyOffers = offers.filter((offer) => (offer.city.name === currentOffer.city.name) && (offer.id !== currentOffer.id));

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery images={currentOffer.images} />
            <div className="property__container container">
              <div className="property__wrapper">
                <Intro {...currentOffer} />
                <Features features={currentOffer.features}/>
                <Host host={currentOffer.host}/>
                <Reviews reviews={currentOffer.reviews}/>
              </div>
            </div>
            <Map offers={nearbyOffers} currentOffer={currentOffer}/>
          </section>
          {nearbyOffers.length > 0 && <Offers offers={nearbyOffers}/>}
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  offers: PropTypes.array,
  currentOffer: PropTypes.shape({
    id: PropTypes.string,
    images: PropTypes.array,
    features: PropTypes.array,
    host: PropTypes.object,
    reviews: PropTypes.array
  }),
  nearbyOffers: PropTypes.array,
  init: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentOffer: state.currentOffer
});


const mapDispatchToProps = (dispatch) => ({
  init(offers, id) {
    dispatch(ActionCreator.initOffer(offers, id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Room);
