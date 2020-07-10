import React, { Component } from "react";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";

class AnsweredPoll extends Component {
  handleOptionOneColor = () => {
    if (this.props.question.optionOne.votes.includes(this.props.authedUser))
      return "green";
    else return "";
  };
  handleOptionTwoColor = () => {
    if (this.props.question.optionTwo.votes.includes(this.props.authedUser))
      return "green";
    else return "";
  };
  render() {
    return (
      <div>
        <div className="tweet">
          <img
            src={this.props.user.avatarURL}
            alt={`Avatar of ${this.props.user.name}`}
            className="avatar"
          />
          <div className="tweet-info">
            <div>
              <p>{`Asked by ${this.props.user.name}`}</p>
              <p>
                <strong>Results:</strong>
              </p>
              <div style={{ marginBottom: 20,color: this.handleOptionOneColor() }}>
                <span style={{ color: this.handleOptionOneColor() }}>
                  {this.props.question.optionOne.text}
                </span>
                <ProgressBar
                  now={this.props.optionOnePer}
                  label={`${this.props.optionOnePer}%`}
                />
                <span>{`${this.props.question.optionOne.votes.length} out of ${this.props.totalVotes}`}</span>
              </div>
              <div
                style={{ marginBottom: 20, color: this.handleOptionTwoColor() }}
              >
                <span style={{ color: this.handleOptionTwoColor() }}>
                  {this.props.question.optionTwo.text}
                </span>
                <ProgressBar
                  now={this.props.optionTwoPer}
                  label={`${this.props.optionTwoPer}%`}
                />
                <span>{`${this.props.question.optionTwo.votes.length} out of ${this.props.totalVotes}`}</span>
              </div>
            </div>
            <div className="tweet-icons"></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  return {
    question: questions[match.params.id],
    user: users[questions[match.params.id].author],
    authedUser: authedUser,
    totalVotes: [
      ...questions[match.params.id].optionOne.votes,
      ...questions[match.params.id].optionTwo.votes,
    ].length,
    optionOnePer: Math.trunc(
      (questions[match.params.id].optionOne.votes.length /
        [
          ...questions[match.params.id].optionOne.votes,
          ...questions[match.params.id].optionTwo.votes,
        ].length) *
        100
    ),
    optionTwoPer: Math.trunc(
      (questions[match.params.id].optionTwo.votes.length /
        [
          ...questions[match.params.id].optionOne.votes,
          ...questions[match.params.id].optionTwo.votes,
        ].length) *
        100
    ),
  };
}

export default connect(mapStateToProps)(AnsweredPoll);
