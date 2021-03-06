import React, { Component } from "react";
import Instafeed from "react-instafeed";

const instafeedTarget = "instafeed";

export default class Instagram extends Component {
  render() {
    return (
      <div id={instafeedTarget}>
        <Instafeed
          limit="4"
          ref="instafeed"
          resolution="standard_resolution"
          sortBy="most-recent"
          target={instafeedTarget}
          template="<a href=&quot;{{link}}&quot;><span><img src=&quot;{{image}}&quot; /></span></a>"
          // userId="7522915823"
          userId="5345282032"
          clientId="ec05939dd8604914936d5d4a4c2f4663"
          //accessToken="5345282032.b3d5035.42f05697fbee418e87f21aa883ac9d95"
        />
      </div>
    );
  }
}
