import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getOffer} from '../store/reducers/offers/selectors.js';
import {ActionCreator} from '../store/actions/actions.js';
import {getComments} from '../store/actions/actions.js';
import {getNearbyOffers} from '../store/actions/actions.js';

import Header from '../components/header/header.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import Intro from '../components/offer-intro/offer-intro.jsx';
import Features from '../components/features/features.jsx';
import Host from '../components/host/host.jsx';
import Reviews from '../components/reviews/reviews.jsx';
import Map from '../components/map/map.jsx';
import Offers from '../components/offers/offers-nearby.jsx';


const MAX_IMAGES = 6;

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setOffer(parseInt(this.props.match.params.id, 10));
    this.props.getComments(this.props.match.params.id);
    this.props.getNearbyOffers(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`
      });

      this.props.setOffer(parseInt(this.props.match.params.id, 10));
      this.props.getComments(this.props.match.params.id, 10);
      this.props.getNearbyOffers(this.props.match.params.id);
    }

    if (this.props.offer && (this.props.city !== this.props.offer.city.name)) {
      this.props.setCity(this.props.offer.city.name);
    }
  }

  render() {
    const {offer, offers} = this.props;

    if (!offer) {
      return null;
    }

    const {images, goods, host, description} = offer;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery images={images.slice(0, MAX_IMAGES)} />
            <div className="property__container container">
              <div className="property__wrapper">
                <Intro {...offer} />
                <Features features={goods}/>
                <Host {...host} description={description}/>
                <Reviews />
              </div>
            </div>
            <Map offers={[...offers, offer]} currentOffer={offer.id}/>
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
  offers: PropTypes.arrayOf(PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      name: PropTypes.string
    }),
    description: PropTypes.string,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string
    }),
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    maxAdults: PropTypes.number,
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string
  })),
  offer: PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      name: PropTypes.string
    }),
    description: PropTypes.string,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string
    }),
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    maxAdults: PropTypes.number,
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string
  }),
  city: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPro: PropTypes.bool,
      avatarUrl: PropTypes.string
    })
  })),
  setOffer: PropTypes.func,
  getComments: PropTypes.func,
  getNearbyOffers: PropTypes.func,
  setCity: PropTypes.func
};

const mapStateToProps = (state) => ({
  city: state.cities.current,
  offers: state.offers.nearby,
  offer: getOffer(state)
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
  },
  getNearbyOffers(id) {
    dispatch(getNearbyOffers(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
