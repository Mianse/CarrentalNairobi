"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container } from '@mantine/core';
import classes from './Map.module.css';

const Map = () => {
  return (
    <Container className={classes.container}>
      <MapContainer className={classes.mapcontainer} center={[51.505, -0.09]} zoom={14} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            Region name <br />
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
}

export default Map;
