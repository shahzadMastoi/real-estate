"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import MarkerIcon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerIcon from '../../../../node_modules/leaflet/dist/images/marker-icon.png';

import MarkerShadow from '../../../../node_modules/leaflet/dist/images/marker-shadow.png';
import L, { marker } from 'leaflet'
const GoogleMap = () => {
  const [currentCity, setCurrentCity] = useState('Unknown Location');
  const [markerPosition, setMarkerPosition] = useState([29.395721,71.683334]);
  console.log(markerPosition, 'setMarkerPosition');
  const updateCityName = async (lat, lng) => {
    try {
      // Use the OpenCage Geocoding API to get location information based on coordinates
      const apiKey = 'bb7b864cee8d4e17bc735531a7c8322e';
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}+${lng}&pretty=1`);
      const data = await response.json();
      // Update the current location in the state
      const location = data.results[0]?.formatted || 'Unknown Location';
      setCurrentCity(location);
    } catch (error) {
      console.error('Error getting location information:', error);
    }
  };
  const reverseGeocode = async (lat, lng) => {
    try {
      // Use the OpenCage Geocoding API to get city information based on coordinates
      const apiKey = 'bb7b864cee8d4e17bc735531a7c8322e';
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}+${lng}&pretty=1`);
      const data = await response.json();
      const addressComponents = data.results[0]?.components;
      const address = addressComponents ? Object.values(addressComponents).filter(Boolean).join(', ') : 'Unknown Address';
    } catch (error) {
      console.error('Error getting location information:', error);
    }
  };
  const handleMove = (map) => {
    if (map) {
      const { lat, lng } = map.getCenter();
      console.log('Map Center:', lat, lng);
      updateCityName(lat, lng);
      reverseGeocode(lat, lng);
    }
  };
  const LocationUpdater = () => {
    const map = useMap();
    useMapEvent('moveend', () => {
      handleMove(map);
    });
    // Handle click event on the map to set the marker position
    useMapEvent('click', (e) => {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
      updateCityName(lat, lng);
      reverseGeocode(lat, lng);
    });
    return null;
  };
  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        // Update the current city in the state
        setMarkerPosition([latitude, longitude]);
        updateCityName(latitude, longitude);
        reverseGeocode(latitude, longitude);
      } catch (error) {
        console.error('Error getting current location:', error);
      }
    };
    getCurrentLocation();
  }, []);
  // Define the marker icon
  const markerIcon = L.icon({
    iconUrl: MarkerIcon.src,
    iconRetinaUrl: MarkerIcon.src,
    iconSize: [25, 41],
    popupAnchor: [0, -41],
    iconAnchor: [12.5, 41],
    shadowUrl: MarkerShadow.src,
    shadowSize: [41, 41]
  });
  return (
    <div className='flex flex-col gap-6'>
      <div className="w-full h-[26px] justify-start items-center gap-2.5 inline-flex pt-[48px]">
        <div className="text-black text-[22px] font-bold font-['Circular Std'] leading-[15px]">Where you’ll be</div>
      </div>
      <div className="w-full h-5 justify-start items-center gap-2.5 inline-flex pt-[26px] ">
        <div className="text-black text-[22px] font-['Circular Std'] leading-[15px]">{currentCity}</div>
      </div>
      <div className="w-full h-[480px] relative ">
        <div className="w-full h-[480px] left-0 top-0 absolute " />
        <MapContainer
          className="w-full h-full left-0 top-0 absolute"
          center={markerPosition}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markerPosition && <Marker
            position={markerPosition}
            icon={markerIcon}
            draggable={true}
          />}
          <LocationUpdater />
        </MapContainer>
      </div>
    </div>
  );
};
export default GoogleMap;