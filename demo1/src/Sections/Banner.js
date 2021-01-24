import React, { Component, Fragment } from "react";

export class Banner extends Component {
  render() {
    var date = "28 June, 2021";
    return (
      <Fragment>
        <section className="banner">
          <div className="row">
            <div className="col-5">
              <img src="https://picsum.photos/400"></img>
            </div>
            <div className="col-2">
              <img src={process.env.PUBLIC_URL + "/save_the_date.jpg"}  />
            </div>
            <div className="col-5">
              <img src="https://picsum.photos/400"></img>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
