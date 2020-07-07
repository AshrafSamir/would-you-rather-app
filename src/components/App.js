import React, { Component } from "react";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from './List'
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default connect(null)(App);
