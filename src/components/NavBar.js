import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Navbar extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    return (
      <div className="bs-example">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          {this.props.loading === true ? null : (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <button className="navbar-brand">
                  <img
                    src={this.props.users[this.props.authedUser].avatarURL}
                    alt={`Avatar of ..`}
                    className="avatar"
                  />
                  <label>{this.props.users[this.props.authedUser].name}</label>
                </button>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav">
                    <Link to="/home" className="nav-item nav-link active">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                    <Link to="/newQuestion" className="nav-item nav-link">
                      New Question
                    </Link>
                    <Link to="/DashBoard" className="nav-item nav-link">
                      Leader Board
                    </Link>

                    <div className="navbar-nav ml-auto">
                      <Link onClick={this.handleLogout} to="/login" className="nav-item nav-link">
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ users }, { authedUser }) {
  console.log(authedUser);
  return {
    users: users,
    authedUser: authedUser,
    loading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(Navbar);
