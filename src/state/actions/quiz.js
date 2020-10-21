export const QUIZ_COMPLETE = "QUIZ_COMPLETE";

function quizComplete(isQuizComplete) {
  return {
    type: QUIZ_COMPLETE,
    isQuizComplete,
  };
}

export function handleQuizComplete(isComplete, cb) {
  return (dispatch) => {
    dispatch(quizComplete(isComplete));
  };
}
