import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import LandingPage from './components/LandingPage';
import SignUpForm from './components/SignUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const mapStyles = {
  width: '100%',
  height: '400px',
  position: 'relative',
};

const App = (props) => {
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);

  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const handleInfoWindowClose = () => {
    setShowInfoWindow(false);
  };



  return (
  <div>
      <LandingPage />
      <SignUpForm />
    <div className="container mt-5">
      <h1 className="text-center">Location</h1>
      <div style={mapStyles}>
        <Map
          google={props.google}
          zoom={18}
          // 6.499191231377258, 3.378711624246337
          initialCenter={{ lat: 6.4993331, lng: 3.3785526 }}
        >
          <Marker position={{ lat: 6.4991331, lng: 3.3787126 }} 
          onClick={handleMarkerClick}
          />

          <InfoWindow
            position={{ lat: 6.4993331, lng: 3.3785526 }}
            visible={showInfoWindow}
            onClose={handleInfoWindowClose}
          >
            <div>
              <h4>GoMyCode</h4>
              <p>This is the building location</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    </div>
  </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHmpL0Kos6XMb2ue-1SXiX1qlEv9hV3M0' //API key
})(App);
