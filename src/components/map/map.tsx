import * as React from 'react';
import * as leaflet from 'leaflet';


import {Offer, City} from '../../common/interfaces';
import {PIN, LAYER} from '../../common/const';

interface Props {
  offers: Offer[];
  focusedOffer?: number;
  currentOffer?: number;
  mini: boolean;
}

const icon = leaflet.icon({
  iconSize: PIN.SIZE,
  iconUrl: PIN.URL
});

const activeIcon = leaflet.icon({
  iconSize: PIN.SIZE,
  iconUrl: PIN.ACTIVE_URL
});

class Map extends React.PureComponent<Props, {}> {
  private mapRef: React.RefObject<HTMLElement>;

  static defaultProps = {
    mini: false
  }

  city: City;
  map: leaflet.Map;
  layer: leaflet.LayerGroup

  constructor(props: Props) {
    super(props);

    this.city = props.offers[0].city;
    this.map = null;
    this.layer = null;
    this.mapRef = React.createRef();
  }

  componentDidUpdate() {
    this.layer.clearLayers();

    for (const offer of this.props.offers) {
      leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon: (this.props.focusedOffer || this.props.currentOffer) === offer.id ? activeIcon : icon})
      .addTo(this.layer);
    }

    this.map.setView([this.props.offers[0].city.location.latitude, this.props.offers[0].city.location. longitude], this.props.offers[0].city.location.zoom);
  }

  componentDidMount() {
    this.map = leaflet.map(this.mapRef.current.id, {
      center: [this.city.location.latitude, this.city.location.longitude],
      zoom: this.city.location.zoom,
      zoomControl: false,
      scrollWheelZoom: false
    });

    this.layer = leaflet.layerGroup().addTo(this.map);

    this.map.setView([this.city.location.latitude, this.city.location. longitude], this.city.location.zoom);

    leaflet
    .tileLayer(LAYER.URL)
    .addTo(this.map);

    for (const offer of this.props.offers) {
      leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon: (this.props.focusedOffer || this.props.currentOffer) === offer.id ? activeIcon : icon})
      .addTo(this.layer);
    }
  }

  render() {
    return (
      <section ref={this.mapRef} className={this.props.mini ? `cities__map map` : `property__map map`} id="map"></section>
    );
  }
}

export default Map;

