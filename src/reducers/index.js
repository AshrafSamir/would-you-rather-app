import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";
import "bootstrap/dist/css/bootstrap.css";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
