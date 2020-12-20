import React, { useEffect, useState } from "react";
import "./typing.css";
import PropTypes from "prop-types";

// REDUX
import { handleFinishedTyping } from "../../state/actions/typing";
import { useDispatch, useSelector } from "react-redux";

import AnimTyping from "react-typing-animation";
import he from "he";

// WORKIN PROGRESS
export default function Typing({ children }) {
  const [isTyping, setIsTyping] = useState(true);
  const dispatch = useDispatch();
  const { finishedTyping } = useSelector((state) => state.typing);

  const htmlText = children.props.dangerouslySetInnerHTML.__html;

  function handleOnFinishedTyping() {
    console.log("HANDLE FINISHED TYPING!!  HANDLE-ON-FINISHED-TYPING-INVOKED");
    console.log("HANDLE FINISHED TYPING!!", isTyping);
    if (isTyping === true && finishedTyping === false) {
      console.log("HANDLE FINISHED TYPING!!  DISPATCH");
    }
  }

  return (
    <AnimTyping
      className="text"
      hideCursor={true}
      speed={25}
      onFinishedTyping={() => {
        handleOnFinishedTyping();
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
