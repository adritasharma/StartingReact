import React, { Component, Fragment } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
export class Whenandwhere extends Component {
  render() {
    
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultZoom={13}
        text="My Marker"
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: props.lat, lng: props.lng }} />
        )}
      </GoogleMap>
    ));

    var locations = [
      {
        eventName: "Wedding",
        location:
          "45/46 RG Baruah Road, Zoo Rd, Tiniali, Guwahati, Assam 781024",
        lat: 26.144518,
        lng: 91.736237,
      },
      {
        eventName: "Reception",
        location:
          "Rail Colony DIMAPUR, NAGALAND (NL), India (IN), Pin Code:- 797112",
        lat: 25.862989,
        lng: 93.753670,
      },
    ]

    return (
      <Fragment>
        <section className="when-and-where">
          <div className="row">
            
            {locations.map((item, i) => {
               return (
              <div className="col-6">
                <div className="card">
                  <div className="card-header">Wedding</div>
                  <div className="card-body">
                    {item.location}
                    <div>
                      <GoogleMapExample
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        isMarkerShown={true} lat={item.lat} lng={item.lng}
                      />
                    </div>
                  </div>
                </div>
              </div>
               )
            })}
          </div>
        </section>
      </Fragment>
    );
  }
}
