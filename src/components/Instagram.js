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
          userId="7522915823"
          clientId="ec05939dd8604914936d5d4a4c2f4663"
          accessToken="7522915823.ec05939.1867511bcb2b4249aff368f46a3d8824"
        />
      </div>
    );
  }
}
