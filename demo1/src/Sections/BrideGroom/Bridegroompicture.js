import "./Bridegroompicture.css";
import React, { Component, Fragment } from "react";

export class Bridegroompicture extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-11 mx-auto">
            <img
              src={process.env.PUBLIC_URL + "images/" + this.props.imagename }
              className="bridegroom-image"
            ></img>
            
          </div>
        </div>
      </Fragment>
    );
  }
}
