import React, { Component } from "react";
import { FacebookProvider, Page } from "react-facebook";

export default class Facebook extends Component {
  render() {
    return (
      <FacebookProvider appId="213984112593410">
        <Page
          href="https://www.facebook.com/epharp"
          tabs=""
          width="500"
          smallHeader="false"
          adaptContainerWidth="true"
          hideCover="false"
          showFacepile="false"
        />
      </FacebookProvider>
    );
  }
}
