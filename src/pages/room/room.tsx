import * as React from 'react';
import {connect} from 'react-redux';

import {Offer} from '../../common/interfaces';
import {getCity} from '../../store/reducer/cities/selectors';
import {getOffer, getNearbyOffers as getOffers} from '../../store/reducer/offers/selectors';
import {ActionCreator as OffersActionCreator, getNearby, setFavorite, getComments} from '../../store/reducer/offers/actions';
import {ActionCreator as CitiesActionCreator} from '../../store/reducer/cities/actions';

import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import Intro from '../../components/offer-intro/offer-intro';
import Features from '../../components/features/features';
import Host from '../../components/host/host';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers-nearby';
import {MAX_IMAGES, OperationStatus} from '../../common/const';


interface Props {
  match: {
    params: {
      id: string;
    };
  };
  offer: Offer;
  offers: Offer[];
  city: string;
  status: string;
  setOffer: (id: number) => void;
  getComments: (id: string) => void;
  getNearby: (id: string) => void;
  setCity: (name: string) => void;
  setFavorite: (id: number, status: number) => void;
}

class Room extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setOffer(parseInt(id, 10));
    this.props.getComments(id);
    this.props.getNearby(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`
      });

      const id = this.props.match.params.id;
      this.props.setOffer(parseInt(id, 10));
      this.props.getComments(id);
      this.props.getNearby(id);
    }

    if (this.props.offer && (this.props.city !== this.props.offer.city.name)) {
      this.props.setCity(this.props.offer.city.name);
    }
  }

  handleClick() {
    const {offer: {id, isFavorite}} = this.props;
    const status = isFavorite ? 0 : 1;
    this.props.setFavorite(id, status);
  }

  render() {
    const {offer, offers, status} = this.props;

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
                <Intro {...offer} onClick={this.handleClick} errorStatus={status === OperationStatus.FAILED}/>
                <Features goods={goods}/>
                <Host {...host} description={description}/>
                <Reviews />
              </div>
            </div>
            <Map offers={[...offers, offer]} currentOffer={offer.id}/>
          </section>
          {offers.length > 0 && <Offers offers={offers}/>}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
  offer: getOffer(state),
  status: state.request.type === `favorite` ? state.request.status : ``
});


const mapDispatchToProps = (dispatch) => ({
  setCity(name) {
    dispatch(CitiesActionCreator.setCity(name));
  },
  setOffer(id) {
    dispatch(OffersActionCreator.setOffer(id));
  },
  getComments(id) {
    dispatch(getComments(id));
  },
  getNearby(id) {
    dispatch(getNearby(id));
  },
  setFavorite(id, status) {
    dispatch(setFavorite(id, status));
  }
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
