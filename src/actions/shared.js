import {
  _getQuestions,
  _getUsers,
  getInitialData,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../utils/_DATA";
import { receiveUsers, saveUserData, addQuestion } from "./users";
import { receiveQuestions, saveQuestionData, newQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";


export const SAVE_ANSWER = "SAVE_ANSWER";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function saveAnswer(answerData) {
  return {
    type: SAVE_ANSWER,
    qid: answerData.qid,
    authedUser: answerData.authedUser,
    answer: answerData.answer,
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

export function handleNewQuestion(question) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const {authedUser} = getState()
    return _saveQuestion(question).then((formattedQuestion) => {
      dispatch(newQuestion(formattedQuestion));
      dispatch(addQuestion({authedUser, formattedQuestion}));
      dispatch(hideLoading());
    });
  };
}
