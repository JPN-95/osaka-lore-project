import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import ChangeView from './ChangeView';
import Slider from '@mui/material/Slider';
import locations from "./data/locations.json";
import LocationMarks from './LocationMarks';
import LongMenu from './LongMenu';


function Map(){
  const explanationText = "Use the drop down menu on the top right of the map to select an area to view/"
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  const maxBounds = [
    [34.9, 135.9],
    [34.5, 135.1]
  ];

  const defaultCenter = [34.68, 135.5023];
  const defaultZoom = 12.5;

  function updateLocation(locationName) {
    setSelectedLocation(locations[locationName]);
  }

  return (
    <div className='map-page'>
      <div className='side-image left-img'></div>
      <div className='side-image right-img'></div>
      <Header onSelect={updateLocation} />
      <div className='map-area'>
      {selectedLocation && (
        <div
        className='slider'
        >
          <Slider  sx={{height:300}}
            aria-label="Opacity"
            orientation="vertical"
            color='green'
            value={overlayOpacity * 100}
            onChange={(event, newValue) => setOverlayOpacity(newValue / 100)}
            defaultValue={100}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks = {true}
            min={0}
            max={100}
          />
        </div>
      )}  
      <div className='map-container'>
        <MapContainer
          zIndex={3} 
          zoomControl={false}
          center={defaultCenter}
          minZoom={defaultZoom}
          zoom={defaultZoom}
          scrollWheelZoom={true}
          maxBounds={maxBounds}
          maxBoundsViscosity={0.5}
        >
        <LongMenu zIndex={-5} onSelect={updateLocation}/>
        

        {selectedLocation && (
          <ChangeView center={selectedLocation.center} zoom={selectedLocation.zoom} />
        )}

        {selectedLocation &&(
          <ImageOverlay
            url={selectedLocation.overlayUrl}
            bounds={selectedLocation.overlayBounds}
            opacity={overlayOpacity}
            zIndex={50}
            setOp
          />
        )}

        {selectedLocation && selectedLocation.markers && (
          <LocationMarks markers={selectedLocation.markers}
          />
        )}
          
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
      </div>
      {selectedLocation && (
        <div className="map-info-container">
          <div className="content-grid map-info">
            <div className="row">
              <div style={{textAlign:"center"}}>
                <h2>{selectedLocation.name}</h2>
                <p>{selectedLocation.areaData}</p>                
              </div>
              <img src={selectedLocation.areaCoverImg} alt="" />
            </div>
          </div>
        </div>
      )}
      </div>    
      <Footer/>
    </div>
  );
}

export default Map;