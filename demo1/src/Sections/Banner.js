import React, { Component, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  render() {
    const windowWidth = this.state.windowWidth;
    return (
      <section className="banner">
        <Carousel responsive={this.responsive}>
          <div>
            <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/banner3.jpg"} />
          </div>
        </Carousel>
        <div className="row">
          <div className="col-12 text-center save-the-date-banner">
            Save the date
            <p>28/06/2021 {windowWidth}</p>
          </div>
        </div>
      </section>
    );
  }

  // render() {
  //   const windowWidth = this.state.windowWidth;
  //   return (
  //     <section className="banner">
  //       <div className="row">
  //         {windowWidth > 1100 && (
  //           <Fragment>
  //             <div className="col-4">
  //               <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} />
  //               <div className="save-the-date-banner"></div>
  //             </div>
  //             <div className="col-4">
  //               <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} />
  //             </div>
  //             <div className="col-4">
  //               <img src={process.env.PUBLIC_URL + "images/banner3.jpg"} />
  //             </div>
  //           </Fragment>
  //         )}
  //                {windowWidth > 500 && windowWidth<= 1100 && (
  //           <Fragment>
  //             <div className="col-6">
  //               <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} />
  //             </div>
  //             <div className="col-6">
  //               <img src={process.env.PUBLIC_URL + "images/banner3.jpg"} />
  //             </div>
  //           </Fragment>
  //         )}
  //         <div className="col-12 text-center save-the-date-banner">
  //           Save the date
  //           <p>28/06/2021 {windowWidth}</p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
}
