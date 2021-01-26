import React, { Component, Fragment } from "react";
import { Bridegroompicture } from "./Bridegroompicture";
import { Bridegroomdescription } from "./Bridegroomdescription";
import { Seperator } from "../../Seperator";

export class Bridegroom extends Component {
  render() {
    var persons = [
      {
        id: 1,
        name: "Ankita Sarkar",
        socialMedia: { fb: "https://www.facebook.com/adrita.sharma.5", insta: "", linkedIn: "" },
      },
      {
        id: 2,
        name: "Krishanu Dey",
        socialMedia: { fb: "", insta: "", linkedIn: "" },
      },
    ];
    return (
      <Fragment>
        <h2>Bride & Groom</h2>
        <Seperator />

        {persons.map((item, i) => {
          return (
            <div className="row" key={i}>
              {i % 2 == 0 ? (
                <Fragment>
                  <div className="col-8 text-right">
                    <Bridegroomdescription key={item.id} name={item.name} socialMedia={item.socialMedia}/>
                  </div>
                  <div className="col-4">
                    <Bridegroompicture />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="col-4">
                    <Bridegroompicture />
                  </div>
                  <div className="col-8 text-left">
                    <Bridegroomdescription key={item.id} name={item.name} socialMedia={item.socialMedia}/>
                  </div>
                </Fragment>
              )}
            </div>
          );
        })}
      </Fragment>
    );
  }
}
