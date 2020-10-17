import { ANSWER_QUESTION, RESET_ANSWERS } from "../../state/actions/answers";

// answers reducer
export default function answers(state = [], action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return state.concat([
        {
          questionNumb: action.questionNumber,
          answerResult: action.answer,
        },
      ]);
    case RESET_ANSWERS:
      state = [];
    default:
      return state;
  }
}
