import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";

class UnansweredPoll extends Component {
  state = {
    answer: "optionOne",
  };
  handleSelection = (e) => {
    const ans = e.target.value;
    this.setState({
      answer: ans,
    });
  };
  handleSubmit = () => {
    const currUser = this.props.currUser;
    const qid = this.props.id;
    const answer = this.state.answer;
    this.props.dispatch(handleSaveAnswer({ currUser, qid, answer }));
  };

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

            <form onSubmit={this.handleSubmit}>
              {" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="optionOne"
                  onClick={this.handleSelection}
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
                  value="optionTwo"
                  onClick={this.handleSelection}
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

function mapStateToProps({ questions, users, authedUser }, { id }) {
  return {
    question: questions[id],
    user: users[questions[id].author],
    currUser: authedUser,
  };
}

export default connect(mapStateToProps)(UnansweredPoll);
