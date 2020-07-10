import {
  _getQuestions,
  _getUsers,
  getInitialData,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { receiveUsers, saveUserData } from "./users";
import { receiveQuestions, saveQuestionData } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "sarahedo";
export const SAVE_ANSWER = "SAVE_ANSWER"

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function saveAnswer(answerData) {
  return {
    type: SAVE_ANSWER,
    qid: answerData.qid,
    authedUser: answerData.authedUser,
    answer: answerData.answer
  };
}

export function handleSaveAnswer(answer) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(saveAnswer(answer));

    return _saveQuestionAnswer(answer).then(() => {

      dispatch(hideLoading());
    });
  };
}
