import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../store/actions/actions.js';
import {getComments} from '../store/actions/actions.js';

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
    this.props.setOffer(parseInt(this.props.match.params.id, 10));
    this.props.getComments(this.props.match.params.id, 10);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`
      });

      this.props.setOffer(parseInt(this.props.match.params.id, 10));
      this.props.getComments(this.props.match.params.id, 10);
    }

    if (this.props.offer && (this.props.city !== this.props.offer.city.name)) {
      this.props.setCity(this.props.offer.city.name);
    }
  }

  render() {
    const {offer, offers, comments} = this.props;

    if (!offer) {
      return null;
    }

    const {images, goods, host, description} = offer;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery images={images} />
            <div className="property__container container">
              <div className="property__wrapper">
                <Intro {...offer} />
                <Features features={goods}/>
                <Host {...host} description={description}/>
                <Reviews reviews={comments}/>
              </div>
            </div>
            <Map offers={offers} currentOffer={offer}/>
          </section>
          {Offers.length > 0 && <Offers offers={offers}/>}
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
  offer: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.array,
    goods: PropTypes.array,
    host: PropTypes.object,
    reviews: PropTypes.array,
    city: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  city: PropTypes.string,
  comments: PropTypes.array,
  nearbyOffers: PropTypes.array,
  setOffer: PropTypes.func,
  getComments: PropTypes.func,
  setCity: PropTypes.func
};

const mapStateToProps = (state) => ({
  city: state.currentCity,
  offers: state.offers.filter((offer) => (offer.city.name === state.currentCity) && (offer.id !== state.currentOffer)).slice(0, 3),
  offer: state.offers.find((offer) => offer.id === state.currentOffer),
  comments: state.comments
});


const mapDispatchToProps = (dispatch) => ({
  setCity(name) {
    dispatch(ActionCreator.setCity(name));
  },
  setOffer(id) {
    dispatch(ActionCreator.setOffer(id));
  },
  getComments(id) {
    dispatch(getComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
