import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderBoard from "./LeaderBoard";

class DashBoard extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((id) => (
          <li key={id}>
            <LeaderBoard id={id} />
          </li>
        ))}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).sort((a, b) => {
      return (
        (users[b].questions.length +
        Object.keys(users[b].answers).length) -
        (users[a].questions.length + Object.keys(users[a].answers).length)
      );
    }),
  };
}
export default connect(mapStateToProps)(DashBoard);
