import React, { Component } from "react";
import { connect } from "react-redux";
import {  Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ViewPoll from "./ViewPoll";


class List extends Component {
  render() {
    let unansweredList = [];
    let answeredList = [];
    if (this.props.allUser[this.props.currUser] !== undefined) {
      unansweredList = this.props.allQuestions.filter((Q) => {
        return !(Q in this.props.allUser[this.props.currUser].answers);
      });
      answeredList = this.props.allQuestions.filter((Q) => {
        return Q in this.props.allUser[this.props.currUser].answers;
      });
    }

    return (
      <div>
        <ul className="nav nav-tabs" style={{ width: "25%", margin: "auto" }}>
          <li className="nav-item">
            <Link to="/home/Unanswered" className="nav-link active" >
              Unanswered
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home/Answered" className="nav-link" >
              Answered
            </Link>
          </li>
        </ul>

        <ul className="dashboard-list">
          {unansweredList.map((id) => (
            <li key={id}>
              <Route
                exact
                path={["/home/Unanswered","/home","/"]}
                component={() => <ViewPoll comp="UnansweredPoll" id={id} />}
              />
            </li>
          ))}
          {answeredList.map((id) => (
            <li key={id}>
              <Route
                exact
                path={["/home/Answered"]}
                component={() => <ViewPoll comp="AnsweredPoll" id={id} />}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    allQuestions: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    currUser: authedUser,
    allUser: users,
  };
}
export default connect(mapStateToProps)(List);
