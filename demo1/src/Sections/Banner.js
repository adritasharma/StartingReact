import React, { Component, Fragment } from "react";

export class Banner extends Component {
  render() {
    var date = "28 June, 2021";
    return (
      <Fragment>
        <section className="banner">
          <div className="row">
            {/* <div className="col-12 banner-bg" style={{ background: 'url(' + process.env.PUBLIC_URL + "images/banner.jpg" + ')' }}>
              <div className="save-the-date-banner">
                Save the date
                <p>28/06/2021</p>
              </div>
            </div> */}
            <div className="col-4">
              <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} />
              <div className="save-the-date-banner">

              </div>
            </div>
            <div className="col-4">
              <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} />
            </div>
            <div className="col-4">
              <img src={process.env.PUBLIC_URL + "images/banner3.jpg"} />
            </div>
            <div className="col-12 text-center save-the-date-banner">
                Save the date
                <p>28/06/2021</p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
