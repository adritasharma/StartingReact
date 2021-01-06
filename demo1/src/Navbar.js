import React, { Component, Fragment } from "react";

export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top font-italic">
          <a className="navbar-brand" href="#">
            <h4>Ankita Krishanu Forever</h4>
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
