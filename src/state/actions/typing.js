export const FINISHED_TYPING = "FINISHED_TYPING";

function finishedTyping(isFinishedTyping) {
  return {
    type: FINISHED_TYPING,
    isFinishedTyping,
  };
}

export function handleFinishedTyping(isTyping, cb) {
  return (dispatch) => {
    dispatch(finishedTyping(isTyping));
  };
}
