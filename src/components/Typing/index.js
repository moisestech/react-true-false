import React from "react";
import "./typing.css";
import PropTypes from "prop-types";

// REDUX
import { handleFinishedTyping } from "../../state/actions/typing";
import { useDispatch, useSelector } from "react-redux";

import AnimTyping from "react-typing-animation";
import he from "he";

export default function Typing({ children }) {
  const distpatch = useDispatch();
  const { resetTyping, finishedTyping } = useSelector((state) => state.typing);

  console.group("TYPING REDUCERS:");
  console.log("RESET-TYPING:", resetTyping);
  console.log("FINISHED-TYPING:", finishedTyping);
  console.groupEnd();

  const htmlText = children.props.dangerouslySetInnerHTML.__html;
  // console.log("children :>> ", htmlText);

  function handleOnFinishedTyping(isFinished) {
    distpatch(handleFinishedTyping(isFinished));
    // if (resetTyping === false) {
    //   return;
    // } else if (isFinished === true) {
    //   distpatch(handleFinishedTyping(isFinished));
    // }
  }

  return (
    <AnimTyping
      className="text"
      onFinishedTyping={() => {
        console.log("HANDLE FINISHED TYPING!!");
        const isFinished = true;
        handleOnFinishedTyping(isFinished);
      }}
    >
      {he.decode(htmlText)}
    </AnimTyping>
  );
}

Typing.propTypes = {
  children: PropTypes.object.isRequired,
};

export const MemoizedTyping = React.memo(Typing);
