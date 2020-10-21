import "./question.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// COMPONENTS
import MemoizedTyping from "../Typing";
import Category from "./components/Category";
import Emoji from "./components/Emoji";

// ROUTER
import { Redirect } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { handleQuizComplete } from "../../state/actions/quiz";

export default function Question({
  category,
  text = "",
  questionNumber,
  quizLength,
  isAnswered,
}) {
  const dispatch = useDispatch();
  const quizComplete = useSelector((state) => state.quizComplete);
  const [nextLocation, setNextLocation] = useState("");
  const [htmlText, setHtmlText] = useState("");

  useEffect(() => {
    if (text !== undefined) {
      setHtmlText(htmlText);
    }

    // Redirect if answered
    if (isAnswered === true) {
      if (questionNumber === 10) {
        const isComplete = true;
        //dispatch(handleQuizComplete(isComplete));

        setNextLocation("result");
      } else {
        setNextLocation("next-question");
      }
    }
  }, [isAnswered, questionNumber, text]);

  return nextLocation === "next-question" ? (
    <Redirect to={`/quiz?number=${questionNumber + 1}`} />
  ) : nextLocation === "result" ? (
    <Redirect to={"/result"} />
  ) : (
    <div className="question-card">
      <div className="header">
        <Category category={category} />
        <div className="number">
          {questionNumber} out of {quizLength}
        </div>
      </div>
      <MemoizedTyping className="animated-typing">
        <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
      </MemoizedTyping>
      {!quizComplete ? <Emoji /> : null}
    </div>
  );
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  correct_answer: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool,
};
