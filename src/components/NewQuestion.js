import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  render() {
    return (
      <div style={{ width: "25%", margin: "auto", marginTop: 30}} className="tweet">
        <form style={{ width: "100%", margin: "auto" }}>
          <h3>Create New Question</h3>
          <div className="form-group">
            <p>Complete your question</p>
            <h6>Would you rather ...</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Option One Here"
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
            />
          </div>
          <button style={{ width: "100%", margin: "auto" }} type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect(null)(NewQuestion);
