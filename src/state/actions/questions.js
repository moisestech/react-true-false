import { getInitialData } from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_FALSE = "ANSWER_FALSE";
export const ANSWER_TRUE = "ANSWER_TRUE";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData()
      .then(({ questions }) => {
        console.log("handleInitialData", questions);
        dispatch(hideLoading());
        dispatch(receiveQuestions(questions));
      })
      // .catch(console.error("Error in getInitialData"));
  };
}
