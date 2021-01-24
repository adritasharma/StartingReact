import "./Bridegroomdescription.css";
import React, { Component, Fragment } from "react";
import { Bridegroomsocialmedia } from "./Bridegroomsocialmedia";

export class Bridegroomdescription extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-11 mx-auto">
            <h3>{this.props.name}</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="col-4 mx-auto">
            <Bridegroomsocialmedia socialMedia={this.props.socialMedia} />
          </div>
        </div>
      </Fragment>
    );
  }
}
