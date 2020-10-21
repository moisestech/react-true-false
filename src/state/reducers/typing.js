import { FINISHED_TYPING } from "../../state/actions/typing";

const initialTypingState = {
  finishedTyping: false,
};

// typing reducer
export default function typing(state = initialTypingState, action) {
  switch (action.type) {
    case FINISHED_TYPING:
      console.log("REDUCER FINISHED-TYPING: ", action.isFinishedTyping);

      return { ...state, finishedTyping: action.isFinishedTyping };
    default:
      return state;
  }
}
