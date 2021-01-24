import React, { Component, Fragment } from "react";

export class Seperator extends Component {
  render() {
    return (
      <Fragment>
        <section className="seperator">
          <div className="row">
            <div className="col-12">
              <img src={process.env.PUBLIC_URL + "images/seperator.png"} />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
