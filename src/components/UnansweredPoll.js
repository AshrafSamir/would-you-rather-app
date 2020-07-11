import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";
import { Link, Redirect } from "react-router-dom";


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
    const authedUser = this.props.currUser;
    const qid = this.props.id;
    const answer = this.state.answer;
    this.props.dispatch(handleSaveAnswer({ authedUser, qid, answer }));
  };

  render() {

    
    const { users, questions, currUser, match } = this.props;
    if(questions[match.params.id] === undefined )return(<div><Redirect to="/error"/></div>)
    const question = questions[match.params.id];
    const user = users[questions[match.params.id].author];
    const authedUser = currUser;

    return (
      <div className="tweet">
       
        <img src={user.avatarURL} alt={`Avatar of ..`} className="avatar" />
        <div className="tweet-info">
          <div>
            <p>{user.name}</p>
            <p>
              <strong>Would you rather ...</strong>
            </p>

            <form >
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
                  {question.optionOne.text}
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
                  {question.optionTwo.text}
                </label>
              </div>
              <Link to={`/AnsweredPoll/${this.props.id}`}>
                <button  onClick={this.handleSubmit} type="submit" className="btn btn-success">
                  Submit
                </button>
              </Link>
            </form>
          </div>
          <div className="tweet-icons"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  return {
    questions: questions,
    users: users,
    currUser: authedUser,
    id: match.params.id,
  };
}

export default connect(mapStateToProps)(UnansweredPoll);
