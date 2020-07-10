import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleNewQuestion } from "../actions/shared";
import { Link } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  handleSubmit = () => {
    const data = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser,
    };
    this.props.dispatch(handleNewQuestion(data));
  };
  handleStateOptionOne = (e) => {
    const text = e.target.value;
    this.setState({
      optionOne: text,
    });
  };
  handleStateOptionTwo = (e) => {
    const text = e.target.value;
    this.setState({
      optionTwo: text,
    });
  };
  render() {
    return (
      <div
        style={{ width: "25%", margin: "auto", marginTop: 30 }}
        className="tweet"
      >
        
        <form style={{ width: "100%", margin: "auto" }}>
          <h3>Create New Question</h3>
          <div className="form-group">
            <p>Complete your question</p>
            <h6>Would you rather ...</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Option One Here"
              onChange={this.handleStateOptionOne}
            />
            <small id="emailHelp" className="form-text text-muted">
              _______________OR________________
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Option Two Here"
              onChange={this.handleStateOptionTwo}
            />
          </div>
          <Link to="/home" className="nav-item nav-link active">
            <button
              style={{ width: "100%", margin: "auto" }}
              type="submit"
              className="btn btn-success"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
  };
}
export default connect(mapStateToProps)(NewQuestion);
