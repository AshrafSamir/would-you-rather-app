import { _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const NEW_QUESTION = "NEW_QUESTION"



export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function newQuestion(formattedQuestion){
  return{
    type: NEW_QUESTION,
    formattedQuestion
  }
}






  
