import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const LeafIcon = leaflet.Icon.extend({
  options: {
    iconSize: [27, 39],
  }
});

const icon = new LeafIcon({iconUrl: `/img/pin.svg`});
const activeIcon = new LeafIcon({iconUrl: `/img/pin-active.svg`});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.city = props.currentOffer ? props.currentOffer.city : props.offers[0].city;
    this.map = null;
    this.layer = null;
    this.mapRef = React.createRef();
  }

  componentDidUpdate() {
    this.layer.clearLayers();

    for (const offer of this.props.offers) {
      leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon: this.props.focusedOffer === offer.id ? activeIcon : icon})
      .addTo(this.layer);
    }

    if (this.props.currentOffer) {
      leaflet
        .marker([this.props.currentOffer.location.latitude, this.props.currentOffer.location.longitude], {icon: activeIcon})
        .addTo(this.layer);
    }

  }

  componentDidMount() {
    this.map = leaflet.map(this.mapRef.current.id, {
      center: [this.city.location.latitude, this.city.location.longitude],
      zoom: this.city.location.zoom,
      zoomControl: true,
      scrollWheelZoom: false,
      marker: true
    });

    this.layer = leaflet.layerGroup().addTo(this.map);

    this.map.setView([this.city.location.latitude, this.city.location. longitude], this.city.location.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{@2x}.png`)
    .addTo(this.map);

    for (const offer of this.props.offers) {
      leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon})
      .addTo(this.layer);
    }

    if (this.props.currentOffer) {
      leaflet
        .marker([this.props.currentOffer.location.latitude, this.props.currentOffer.location.longitude], {icon: activeIcon})
        .addTo(this.layer);
    }
  }

  render() {
    return (
      <section ref={this.mapRef} className={this.props.mini ? `cities__map map` : `property__map map`} id="map">
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array,
  mini: PropTypes.bool,
  currentOffer: PropTypes.object,
  focusedOffer: PropTypes.number
};

Map.defaultProps = {
  mini: false,
  currentOffer: null
};

export default Map;

