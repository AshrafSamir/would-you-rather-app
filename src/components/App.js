import React, { Component, Fragment } from "react";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Navbar from "./NavBar";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import DashBoard from "./DashBoard";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Router>
            <Fragment>
              <Navbar />
              <LoadingBar />
              <Route
                path={["/home", "/", "/home/Unanswered", "/home/Answered"]}
                exact
                component={Home}
              />
              <Route path="/newQuestion" component={NewQuestion} />
              <Route path="/DashBoard" component={DashBoard} />
              <Route path="/UnansweredPoll/:id" component={UnansweredPoll} />
              <Route path="/AnsweredPoll/:id" component={AnsweredPoll} />
            </Fragment>
          </Router>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
