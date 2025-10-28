import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Volunteer } from '../types';

interface MapProps {
  volunteers: Volunteer[];
}

const Map: React.FC<MapProps> = ({ volunteers }) => {
  const position: [number, number] = [20.5937, 78.9629]; // Centered on India

  return (
    <MapContainer center={position} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {volunteers.map(volunteer => (
        <Marker key={volunteer.id} position={[parseFloat(volunteer.coords.top), parseFloat(volunteer.coords.left)]}>
          <Popup>
            {volunteer.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
