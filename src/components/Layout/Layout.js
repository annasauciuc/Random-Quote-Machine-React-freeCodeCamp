import React, { Component } from "react";

import "./Layout.css";
import Quote from "./../Quote/Quote";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Quote />
      </React.Fragment>
    );
  }
}

export default Layout;
