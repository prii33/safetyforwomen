import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Volunteer } from '../types';

interface MapProps {
  volunteers: Volunteer[];
}

const Map: React.FC<MapProps> = ({ volunteers }) => {
  const position: [number, number] = [20.5937, 78.9629]; // Centered on India

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ height: '500px', width: '100%', background: '#111' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {volunteers.map(volunteer => (
        <Marker key={volunteer.id} position={[parseFloat(volunteer.coords.top), parseFloat(volunteer.coords.left)]}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} className="custom-map-tooltip">
            <span>{volunteer.city}</span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
