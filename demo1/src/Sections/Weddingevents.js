import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import HorizontalTimeline from "react-styled-horizontal-timeline";

export class Weddingevents extends Component {
  state = { value: 0, previous: 0 };

  render() {
    var events = [
      {
        date: "2020-11-23",
        name: "Engagement",
      },
      {
        date: "2021-06-26",
        name: "Bachelor's Party",
      },
      {
        date: "2021-06-27",
        name: "Aiburobhat & Mehendi",
      },
      {
        date: "2021-06-28",
        name: "Wedding",
      },
      {
        date: "2021-07-01",
        name: "Reception",
      },
    ];
    const VALUES = events.map((x) => x.date);

    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
            isForwardEnabled={false}
            isBackEnabled={false}
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className="text-center">
          <h2> {events[this.state.value].name}</h2>
        </div>
      </div>
    );
  }
}
