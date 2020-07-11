import React, { Component, Fragment } from "react";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Navbar from "./NavBar";
import NewQuestion from "./NewQuestion";
import DashBoard from "./DashBoard";
import LoadingBar from "react-redux-loading-bar";
import Error from "./Error";
import SelectUser from "./SelectUser";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? (
          <Router>
            <Route path="/login" component={SelectUser} />
          </Router>
        ) : (
          <Router>
            <Fragment>
              <Route
                path={[
                  "/home",
                  "/",
                  "/home/Unanswered",
                  "/home/Answered",
                  "/newQuestion",
                  "/DashBoard",
                  "/UnansweredPoll/:id",
                  "/AnsweredPoll/:id",
                ]}
                exact
                component={() => {
                  return <Navbar authedUser={this.props.authedUser} />;
                }}
              />
              <LoadingBar />
              <Route path="/login" component={SelectUser} />
              <Route
                path={["/home", "/", "/home/Unanswered", "/home/Answered"]}
                exact
                component={Home}
              />
              <Route path="/newQuestion" component={NewQuestion} />
              <Route path="/DashBoard" component={DashBoard} />
              <Route path="/UnansweredPoll/:id" component={UnansweredPoll} />
              <Route path="/AnsweredPoll/:id" component={AnsweredPoll} />
              <Route path="/error" component={Error} />
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
    authedUser: authedUser,
  };
}
export default connect(mapStateToProps)(App);
