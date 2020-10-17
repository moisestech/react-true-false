export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RESET_ANSWERS = "RESET_ANSWERS";

function answerQuestion(questionNumber, answer) {
  return {
    type: ANSWER_QUESTION,
    questionNumber,
    answer,
  };
}

export function resetAnswers() {
  return {
    type: RESET_ANSWERS,
  };
}

export function handleAnswerQuestion(questionNumber, answer, cb) {
  return (dispatch) => {
    dispatch(answerQuestion(questionNumber, answer));
  };
}
