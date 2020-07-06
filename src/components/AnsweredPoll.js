import React, { Component } from "react";
import { connect } from "react-redux";

class AnsweredPoll extends Component {
  render() {
    return (
      <div>
        <div className="tweet">
          <img
            src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
            alt={`Avatar of ..`}
            className="avatar"
          />
          <div className="tweet-info">
            <div>
              <p>Asked by Sarah Samir</p>
              <p>
                <strong>Results:</strong>
              </p>
              <div style={{ marginBottom: 20 }}>
                <span>Would u rather option 1 ?</span>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    //max 170
                    style={{ width: 100 }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>2 out 3</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <span>Would u rather option 2 ?</span>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{ width: 25 }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>1 out 3</span>
              </div>
            </div>
            <div className="tweet-icons"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null)(AnsweredPoll);
