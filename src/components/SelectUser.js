import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class SelectUser extends Component {
  handleLogin = (e) => {
    this.props.dispatch(setAuthedUser(e.target.value));
  };
  render() {
    if(this.props.loading === false)return <Redirect to="/home"/>
    return (
      <div style={{ width: "25%", margin: "auto" }}>
        <label>Select user To Login</label>
        <div className="tweet">
          <select
            onChange={this.handleLogin}
            className="custom-select is-valid"
          >
            {this.props.usersList.map((id) => (
              <option key={id} value={id}>
                {this.props.users[id].name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users, authedUser }) {
  return {
    usersList: Object.keys(users),
    users: users,
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(SelectUser);
