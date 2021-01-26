import React, { Component, Fragment } from "react";
import Slider from "react-slick";

export class Weddingevents extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Fragment>
        <div className="row">
          <div className="col-12">
            <section className="wedding-timeline">
              <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
              </div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}
