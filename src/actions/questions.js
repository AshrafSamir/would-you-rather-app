export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

  
