import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

class QuestionDetails extends Component {
  render() {
    const { question_id } = this.props.match.params;
    const { questions, user } = this.props;
    const question = questions[question_id];
    const answered = !!user.answers[question_id];

    if (!question) {
      return <Redirect to="/error" />;
    } else if (answered) {
      return <AnsweredPoll id={question_id} />;
    } else {
      return <UnansweredPoll id={question_id} />;
    }
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: questions,
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(QuestionDetails);
