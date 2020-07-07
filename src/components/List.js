import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UnasnweredPoll from "./UnansweredPoll";
import AnsnweredPoll from "./AnsweredPoll";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "jquery/dist/jquery.min.js";
//import "bootstrap/dist/js/bootstrap.min.js";

class List extends Component {
  state = {
    unansweredList: [],
    AnsnweredList: [],
  };
  handleLists = () => {
    this.setState({
      unansweredList: this.props.allQuestions.filter((Q) => {
        return !(Q in this.props.allUser[this.props.currUser].answers);
      }),
      AnsnweredList: this.props.allQuestions.filter((Q) => {
        return Q in this.props.allUser[this.props.currUser].answers;
      }),
    });
  };
  render() {
    return (
      <div>
        <Router>
          <h3 className="center">Your Questions</h3>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              
                <Link to="/Unanswered" onClick={this.handleLists} className="nav-link active" href="#">
                  Unanswered
                </Link>
            
            </li>
            <li className="nav-item">
              
                <Link to ="/Answered" onClick={this.handleLists} className="nav-link" href="#">
                  Answered
                </Link>
              
            </li>
          </ul>

          <ul className="dashboard-list">
            {this.state.unansweredList.map((id) => (
              <li key={id}>
                <Route
                  path="/Unanswered"
                  component={() => <UnasnweredPoll id={id} />}
                />
              </li>
            ))}
            {this.state.AnsnweredList.map((id) => (
              <li key={id}>
                <Route
                  path="/Answered"
                  component={() => <AnsnweredPoll id={id} />}
                />
              </li>
            ))}
          </ul>
        </Router>
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
