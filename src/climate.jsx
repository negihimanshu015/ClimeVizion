import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {position && <Marker position={position} />}
            <MapClick />
        </MapContainer>
    );
}


function ClimeVizion() {
    const [climateData, setClimateData] = useState(null);

    const handleLocationSelect = async (location) => {
        console.log('Selected location:', location);
        const data = await fetchClimateData(location.lat, location.lng);
        setClimateData(data);
    };

    const fetchClimateData = async (lat, lng) => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
            );
            const data = await response.json();
            console.log( data );
            return {
                temperature: data.current_weather?.temperature || '......',
                co2: '.....',
                seaLevel: '.....',
            };
        } catch (error) {
            console.error('Error fetching climate data:', error);
            return null;
        }
    };

    return (
        <div>
            <section className="hero is-primary m-0">
                <div className="hero-body">
                    <p className="subtitle">Visualize Climate Data</p>
                </div>
            </section>
            <section className="section is-medium">
                <h2 className="title">Key Climate Metrics</h2>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="box">
                                <h3 className="subtitle">Global Temperature</h3>
                                <p>{climateData ? `${climateData.temperature}°C` : 'Select a location on the map'}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <h3 className="subtitle">CO2 Emission</h3>
                                <p>{climateData ? climateData.co2 : 'Select a location on the map'}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <h3 className="subtitle">Sea Level</h3>
                                <p>{climateData ? climateData.seaLevel : 'Select a location on the map'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2 className="subtitle">Location Map</h2>
                    <LocationPicker onLocationSelected={handleLocationSelect} />
                </div>
            </section>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>API Source: Open-Meteo</p>
                </div>
            </footer>
        </div>
    );
}

export default ClimeVizion;