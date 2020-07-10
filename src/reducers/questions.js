import { RECEIVE_QUESTIONS } from "../actions/questions";
import {SAVE_ANSWER} from "../actions/shared"

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
      case SAVE_ANSWER:
        return{
          ...state,
          [action.qid]: {
            ...state[action.qid],
            [action.answer]: {
              ...state[action.qid][action.answer],
              votes: state[action.qid][action.answer].votes.concat([action.authedUser]),
            },
          },
        }
    default:
      return state;
  }
}
