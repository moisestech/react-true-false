import "./animated-typing.css";
import PropTypes from "prop-types";

// REDUX
//import { startTimerAnimation } from "../../state/actions/timer";
import { useDispatch } from "react-redux";

import Typing from "react-typing-animation";
import he from "he";

export default function AnimatedTyping({ children }) {
  const distpatch = useDispatch();

  const htmlText = children.props.dangerouslySetInnerHTML.__html;
  console.log("children :>> ", htmlText);

  // function handleFinishedTyping() {
  //   distpatch(startTimerAnimation());
  // }

  return (
    <Typing
      className="text"
      onFinishedTyping={() => {
        handleFinishedTyping();
      }}
    >
      {he.decode(htmlText)}
    </Typing>
  );
}

AnimatedTyping.propTypes = {
  dangerouslySetInnerHTML: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired,
};
