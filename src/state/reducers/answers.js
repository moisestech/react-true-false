import { ANSWER_QUESTION } from '../../state/actions/answers';

// answers reducer
export default function answers(state = [], action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return state.concat([{
        questionNumb: action.questionNumber,
        answerResult: action.answer
      }])
    default:
      return state;
  }
}