import React from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = (props) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTP3qSBPXQJB4_9vEANFJkh-d5SJeI9uQ" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

const GoogleMap2 = (props) => {
  const randomObject = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTP3qSBPXQJB4_9vEANFJkh-d5SJeI9uQ" }}
        defaultCenter={randomObject.center}
        defaultZoom={randomObject.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

class App extends React.Component {
  state = {
    center: {
      lat: null,
      lng: null,
    },
    zoom: 11,
    readyOrNot: false,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          readyOrNot: true,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  render() {
    // if (!this.state.readyOrNot) {
    //   return <GoogleMap2></GoogleMap2>;
    // } else {
    //   return (
    // <div>
    //   <GoogleMap
    //     center={this.state.center}
    //     zoom={this.state.zoom}
    //   ></GoogleMap>
    // </div>
    //   );

    // return !this.state.readyOrNot ? (
    //   <GoogleMap2></GoogleMap2>
    // ) : (
    //   <div>
    //     <GoogleMap
    //       center={this.state.center}
    //       zoom={this.state.zoom}
    //     ></GoogleMap>
    //   </div>
    // );

    return (
      <div>
        {!this.state.readyOrNot ? (
          <GoogleMap2></GoogleMap2>
        ) : (
          <GoogleMap
            center={this.state.center}
            zoom={this.state.zoom}
          ></GoogleMap>
        )}
      </div>
    );
  }
}

export default App;
