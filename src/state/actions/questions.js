import { getInitialData } from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ questions }) => {
      console.log("handleInitialData", questions);
      dispatch(hideLoading());
      dispatch(receiveQuestions(questions));
    });
  };
}
