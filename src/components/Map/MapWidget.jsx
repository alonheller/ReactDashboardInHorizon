import React from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = {
  lat: 39.742351,
  lng: -104.996958,
};

const params = { v: '3.exp', key: 'AIzaSyBLsUvjbD9Njoq15vs-q0Pb7cya_EhLE8U' };

class MapWidget extends React.Component {
  onMapCreated = map => {
    map.setOptions({
      disableDefaultUI: true,
    });
  };

  render() {
    return (
      <Gmaps
        width="100%"
        height="400px"
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage="Be happy"
        params={params}
        onMapCreated={this.onMapCreated}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable
          onDragEnd={this.onDragEnd}
        />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content="Hello, React :)"
          onCloseClick={this.onCloseClick}
        />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick}
        />
      </Gmaps>
    );
  }
}
export default MapWidget;
