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
    this.props.init(this.props.offers, parseInt(this.props.match.params.id, 10));
    this.props.getComments(parseInt(this.props.match.params.id, 10));
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.currentOffer) && (nextProps.match.params.id !== this.props.currentOffer.id)) {
      window.scrollTo({
        top: 0,
        behavior: `scroll`
      });

      this.props.init(this.props.offers, parseInt(this.props.match.params.id, 10));
      this.props.getComments(parseInt(this.props.match.params.id, 10));
    }
  }

  render() {
    const {currentOffer, offers, comments} = this.props;

    if (!currentOffer) {
      return null;
    }

    const {id, images, goods, host, city} = currentOffer;
    const nearbyOffers = offers.filter((offer) => (offer.city.name === city.name) && (offer.id !== id));

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery images={images} />
            <div className="property__container container">
              <div className="property__wrapper">
                <Intro {...currentOffer} />
                <Features features={goods}/>
                <Host {...host}/>
                <Reviews reviews={comments}/>
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
    goods: PropTypes.array,
    host: PropTypes.object,
    reviews: PropTypes.array,
    city: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  comments: PropTypes.array,
  nearbyOffers: PropTypes.array,
  init: PropTypes.func,
  getComments: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentOffer: state.currentOffer,
  comments: state.comments
});


const mapDispatchToProps = (dispatch) => ({
  init(offers, id) {
    dispatch(ActionCreator.initOffer(offers, id));
  },
  getComments(id) {
    dispatch(ActionCreator.getComments(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Room);
