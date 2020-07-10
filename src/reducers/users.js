import { RECEIVE_USERS } from "../actions/users";
import {SAVE_ANSWER} from "../actions/shared"


export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
      case SAVE_ANSWER:
        return{
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            answers: {
              ...state[action.authedUser].answers,
              [action.qid]: action.answer,
            },
          },
        }
    default:
      return state;
  }
}
