import React, { Component } from "react";
import { connect } from "react-redux";
import UnasnweredPoll from "./UnansweredPoll";
import AnsnweredPoll from "./AnsweredPoll";

class List extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Questions</h3>
        <ul className="dashboard-list">
          {this.props.allQuestions.map((id) => (
            <li key={id}>
              <UnasnweredPoll id ={id}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


function mapStateToProps({ questions }) {
  return {
    allQuestions: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}
export default connect(mapStateToProps)(List);
