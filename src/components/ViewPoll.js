import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UnansweredPoll from "./UnansweredPoll";
import AnsweredPoll from "./AnsweredPoll";
import { Link } from "react-router-dom";

class ViewPoll extends Component {
  render() {
    return (
      <div className="tweet">
        
          <img
            src={this.props.user.avatarURL}
            alt={`Avatar of ..`}
            className="avatar"
          />
          <div className="tweet-info">
            <div>
              <p>{this.props.user.name}</p>
              <p>
                <strong>Would you rather ...</strong>
              </p>
              <label className="form-check-label" htmlFor="exampleRadios1">
                ...{this.props.question.optionOne.text}...
              </label>
              <Link to={`/${this.props.comp}/${this.props.id}`}>
              <button
                  type="button"
                  style={{ display: "block" }}
                  className="btn btn-success"
                >
                  View Poll
                </button>
              </Link>
              

            </div>
            <div className="tweet-icons"></div>
          </div>
        
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id, comp }) {
  return {
    question: questions[id],
    user: users[questions[id].author],
    comp: comp,
  };
}

export default connect(mapStateToProps)(ViewPoll);
