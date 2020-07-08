import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
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
          </div>
          <div>
            <p>
              Answered Questions{" "}
              <span style={{ color: "green" }}>
                {Object.keys(this.props.user.answers).length}
              </span>
            </p>
            <p>
              Created Questions{" "}
              <span style={{ color: "green" }}>
                {this.props.user.questions.length}
              </span>{" "}
            </p>
            <h6>
              Score{" "}
              <span style={{ color: "red" }}>
                {this.props.user.questions.length +
                  Object.keys(this.props.user.answers).length}
              </span>{" "}
            </h6>
          </div>
          <div className="tweet-icons"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }, { id }) {
  return {
    user: users[id],
    currUser: authedUser,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
