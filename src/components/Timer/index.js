import "./timer.css";
import { useState, useRef } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { handleAnswerQuestion } from "../../state/actions/answers";

// TRANSITIONS
import { CSSTransition } from "react-transition-group";

export default function Timer({ questionNumber }) {
  const dispatch = useDispatch();
  const { finishedTyping, resetTyping } = useSelector((state) => state.typing);
  console.log("TIMER useSelector finishedTyping :>> ", finishedTyping);
  console.log("TIMER useSelector resetTyping :>> ", resetTyping);

  const [animating, setAnimating] = useState(finishedTyping);
  const [timeLeft, setTimeLeft] = useState(10);
  const intervalRef = useRef(null);

  function startTimer() {
    console.log("START-TIME ON-ENTERED TRUE");

    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          console.log("TIME-LEFT", timeLeft);
          return timeLeft - 1;
        }

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setAnimating(false);

    // restting isFinishedTyping false
    const isFinished = false;
    distpatch(handleFinishedTyping(isFinished));
    handleTimeOut();
  }

  function handleTimeOut() {
    console.log("DISPATCH TIME-OUT");
    dispatch(handleAnswerQuestion(questionNumber, "wrong"));
  }

  return (
    <div className="animated-timer">
      <div>{timeLeft}</div>
      <svg>
        <defs>
          <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="bgGradient">
            <stop offset="0%" stopColor="rgb(70, 39, 89)" stopOpacity="1" />
            <stop offset="50%" stopColor="#800080" />
            <stop offset="100%" stopColor="#FF0080" />
          </linearGradient>
        </defs>

        <CSSTransition
          component="g"
          in={animating}
          appear={animating}
          timeout={10}
          classNames="anim-rect"
          unmountOnExit
          onEntering={() => console.log("RECT ON-ENTERING")}
          onEnter={() => console.log("RECT ON-ENTER")}
          onEntered={() => startTimer()}
          onExit={() => console.log("RECT ON-EXIT")}
          onExiting={() => console.log("RECT ON-EXITING")}
          onExited={() => console.log("RECT ON-EXITED")}
        >
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
        </CSSTransition>
      </svg>
    </div>
  );
}
