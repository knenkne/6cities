import React from "react";
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});


class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }


  componentDidMount() {
    const city = this.props.offers[0].city;
    const map = leaflet.map(this.mapRef.current.id, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{@2x}.png`)
    .addTo(map);

    for (const offer of this.props.offers) {
      leaflet
      .marker(offer.cords, {icon})
      .addTo(map);
    }
  }

  render() {
    return (
      <section ref={this.mapRef} className="cities__map map" id="map">
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array
};

export default Map;

