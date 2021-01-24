import "./Bridegroomsocialmedia.css";
import React, { Component, Fragment } from "react";

export class Bridegroomsocialmedia extends Component {
  render() {
    return (
      <Fragment>
        <section className="social-media-section">
          <div className="row">
            <div className="col-4 text-center">
              <a href={this.props.socialMedia.fb} target="_blank">
                <i className="fa fa-facebook"> </i>
              </a>
            </div>
            <div className="col-4 text-center">
              <a href={this.props.socialMedia.insta} target="_blank">
                <i className="fa fa-instagram"> </i>
              </a>
            </div>
            <div className="col-4 text-center">
              <a href={this.props.socialMedia.linkedin} target="_blank">
                <i className="fa fa-linkedin"> </i>
              </a>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
