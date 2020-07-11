import React, { Component, Fragment } from "react";
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
import QuestionDetails from "./QuestionDetails ";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? (
          <div>
            <Router>
              <Navbar />
              <SelectUser />
            </Router>
          </div>
        ) : (
          <Router>
            <Fragment>
              <Route
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
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={DashBoard} />
              <Route
                path="/questions/:question_id"
                component={QuestionDetails}
              />
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
