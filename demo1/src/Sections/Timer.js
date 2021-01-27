import React, { Component, Fragment } from "react";
import "./Timer.css";

export class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  render() {
    const date = new Date(Date.parse(new Date(2021, 5, 28)));
    const t = this.getTimeRemaining(date);

    return (
      <Fragment>
          {/* <div id="clockdiv">
            <div className="time">
              <span className="days">{t.days}</span>
              <div className="smalltext">Days</div>
            </div>
            <span>
              <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
            </span>
            <div className="time">
              <span className="hours">{("0" + t.hours).slice(-2)}</span>
              <div className="smalltext">Hours</div>
            </div>
            <span>
              <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
            </span>
            <div className="time">
              <span className="minutes">{("0" + t.minutes).slice(-2)}</span>
              <div className="smalltext">Minutes</div>
            </div>
            <span>
              <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
            </span>
            <div className="time">
              <span className="seconds">{("0" + t.seconds).slice(-2)}</span>
              <div className="smalltext">Seconds</div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-2 offset-1 time">
              <span className="days">{t.days}</span>
              <div className="smalltext">Days</div>
              <span>
                <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
              </span>
            </div>
            <div className="col-2 offset-1 time">
            <span className="hours">{("0" + t.hours).slice(-2)}</span>
              <div className="smalltext">Hours</div>
              <span>
                <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
              </span>
            </div>
            <div className="col-2 offset-1 time">
            <span className="minutes">{("0" + t.minutes).slice(-2)}</span>
              <div className="smalltext">Minutes</div>
              <span>
                <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
              </span>
            </div>
            <div className="col-2 offset-1 time">
              <span className="seconds">{("0" + t.seconds).slice(-2)}</span>
              <div className="smalltext">Seconds</div>
              <span>
                <img src={process.env.PUBLIC_URL + "/heart.gif"} height="50" />
              </span>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-7 col-md-11 col-sm-12 mx-auto">
              <div className="d-flex justify-content-around  mb-3">
                <div className="p-3 time ">
                  <span className="days">{t.days}</span>
                  <div className="smalltext">Days</div>
                </div>
                <div className="p-1 heart">
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/heart.gif"}
                      height="50"
                    />
                  </span>
                </div>
                <div className="p-3 time">
                  <span className="hours">{("0" + t.hours).slice(-2)}</span>
                  <div className="smalltext">Hours</div>
                </div>

                <div className="p-1 heart">
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/heart.gif"}
                      height="50"
                    />
                  </span>
                </div>
                <div className="p-3 time ">
                  <span className="minutes">{("0" + t.minutes).slice(-2)}</span>
                  <div className="smalltext">Minutes</div>
                </div>
                <div className="p-1 heart">
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/heart.gif"}
                      height="50"
                    />
                  </span>
                </div>
                <div className="p-3 time">
                  <span className="seconds">{("0" + t.seconds).slice(-2)}</span>
                  <div className="smalltext">Seconds</div>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      seconds: parseInt(props.startTimeInSeconds, 10) || 0,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
