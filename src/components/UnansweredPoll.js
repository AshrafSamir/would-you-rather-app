import React, { Component } from "react";
import { connect } from "react-redux";

class UnansweredPoll extends Component {
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

            <form>
              {" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  {this.props.question.optionOne.text}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  {this.props.question.optionTwo.text}
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div className="tweet-icons"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  return {
    question: questions[id],
    user: users[questions[id].author],
  };
}

export default connect(mapStateToProps)(UnansweredPoll);
