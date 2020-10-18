import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Correct from "./components/Correct";
import Wrong from "./components/Wrong";

import { useSelector } from "react-redux";

export default function ResultSymbol({ questionNumber }) {
  const [result, setResult] = useState("");
  const question = questionNumber;
  const answers = useSelector((store) => store.answers);

  useEffect(() => {
    const answerPosition = answers[question - 1];
    console.log("RESULT-SYMBOL USE-EFFECT!");
    if (answerPosition !== undefined) {
      setResult(false);
      const result = answerPosition.answerResult;
      if (result === "correct") {
        setResult("correct");
      } else if (result === "wrong") {
        setResult("wrong");
      }
    }
  }, [question, answers]);

  return (
    <div className="result-symbol container">
      {result === "correct" ? (
        <Correct />
      ) : result === "wrong" ? (
        <Wrong />
      ) : null}
    </div>
  );
}

ResultSymbol.propTypes = {
  questionNumber: PropTypes.number.isRequired,
};
