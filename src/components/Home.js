import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default connect(null)(Home);
