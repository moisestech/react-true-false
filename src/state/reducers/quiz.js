import { QUIZ_COMPLETE } from "../../state/actions/quiz";

const initialQuizState = {
  quizComplete: false,
};

// typing reducer
export default function typing(state = initialQuizState, action) {
  switch (action.type) {
    case QUIZ_COMPLETE:
      return { ...state, quizComplete: action.isQuizComplete };
    default:
      return state;
  }
}
