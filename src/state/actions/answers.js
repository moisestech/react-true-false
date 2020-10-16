export const ANSWER_QUESTION = "ANSWER_QUESTION"

function answerQuestion(questionNumber, answer) {
  return {
    type: ANSWER_QUESTION,
    questionNumber,
    answer
  }
}

export function handleAnswerQuestion(questionNumber, answer, cb) {
  return (dispatch) => {
    dispatch(answerQuestion(questionNumber, answer))
  }
}
