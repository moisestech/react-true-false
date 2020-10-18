import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// ROUTER
import { Redirect } from "react-router-dom";

export default function Question({
  category,
  text,
  questionNumber,
  quizLength,
  isAnswered,
}) {
  const [nextLocation, setNextLocation] = useState("");

  console.group("QUESTION-COMP:", questionNumber);
  console.log("isAnswered", isAnswered);
  console.groupEnd();

  useEffect(() => {
    // Redirect if answered
    if (isAnswered === true) {
      if (questionNumber === 10) {
        setNextLocation("result");
      } else {
        setNextLocation("next-question");
      }
    }
  }, [isAnswered, questionNumber]);

  return nextLocation === "next-question" ? (
    <Redirect to={`/quiz?number=${questionNumber + 1}`} />
  ) : nextLocation === "result" ? (
    <Redirect to={"/result"} />
  ) : (
    <div className="question-card">
      <div className="header">
        <div className="category">Category: {category}</div>
        <div className="number">
          {questionNumber} out of {quizLength}
        </div>
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
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
