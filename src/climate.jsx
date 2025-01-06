import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet/dist/leaflet.css";
import "./styles/index.css";

function SearchBar({ onLocationSelected }) {
  const map = useMap();

  React.useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      autoClose: true,
      showMarker: false,
      retainZoomLevel: false,
    });

    map.addControl(searchControl);

    map.on("geosearch/showlocation", (event) => {
      const { x: lng, y: lat } = event.location;
      onLocationSelected({ lat, lng });
    });

    return () => map.removeControl(searchControl);
  }, [map, onLocationSelected]);

  return null;
}

function LocationPicker({ onLocationSelected }) {
  const [position, setPosition] = useState(null);

  const MapClick = () => {
    useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
        onLocationSelected(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {position && <Marker position={position} />}
      <MapClick />
      <SearchBar onLocationSelected={onLocationSelected} />
    </MapContainer>
  );
}

function ClimeVizion() {
  const [climateData, setClimateData] = useState({
    temperature: ".....",
    pressure: ".....",
    windSpeed: ".....",
  });

  const handleLocationSelect = async (location) => {
    const data = await fetchClimateData(location.lat, location.lng);
    setClimateData(data);
  };

  const fetchClimateData = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
      );
      const data = await response.json();

      const pressureRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=pressure_msl&timezone=auto`
      );
      const pressureData = await pressureRes.json();

      return {
        temperature: data.current_weather?.temperature || "......",
        windSpeed: data.current_weather?.windspeed || ".....",
        pressure: pressureData.hourly?.pressure_msl?.[0] || ".....",
      };
    } catch (error) {
      console.error("Error fetching climate data:", error);
      return {
        temperature: ".....",
        windSpeed: ".....",
        pressure: ".....",
      };
    }
  };

  return (
    <div>
      <div className="box">
        <LocationPicker onLocationSelected={handleLocationSelect} />
      </div>
      
      <div className="columns is-mobile is-centered climate-data-container">
        <div className="column m-4">
          <div className="box has-text-centered">
            <h3 className="subtitle">Temperature</h3>
            <p className="is-size-5">
              {climateData.temperature}°C
            </p>
          </div>
        </div>
        <div className="column m-4">
          <div className="box has-text-centered">
            <h3 className="subtitle">Wind Speed</h3>
            <p className="is-size-5">
              {climateData.windSpeed} km/h
            </p>
          </div>
        </div>
        <div className="column m-4">
          <div className="box has-text-centered">
            <h3 className="subtitle">Pressure</h3>
            <p className="is-size-5">
              {climateData.pressure} hpa
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>API Source: Open-Meteo</p>
        </div>
      </footer>
    </div>
  );
}

export default ClimeVizion;
