import { _getQuestions, _getUsers, getInitialData, _saveQuestionAnswer} from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
//import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    //dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      //dispatch(hideLoading())
    });
  };
}

export function handleSaveAnswer(answer) {
  console.log("ans",answer)
  return (dispatch) => {
    console.log('ans',answer)
    return _saveQuestionAnswer(answer).then(
      ({ users, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      }
    ).catch(console.log("ERROR"));
  };
}
