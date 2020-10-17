import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// ROUTING
import { Redirect, useLocation } from "react-router-dom";
import queryString from "query-string";

// COMPONENTS
import AnswerButtons from "../../components/AnswerButtons";
import FilterQuiz from "../../components/FilterQuiz";

// CUSTOM HOOK
import useQuizValid from "../../hooks/useQuizValid";

export default function Quiz({ questions, answers }) {
  const [quizLength, setQuizLength] = useState(0);
  const lengthOfQuiz = Object.keys(questions).length;

  // receive search queryString from router location
  const { search } = useLocation();
  const { number } = queryString.parse(search);

  // only return typeof number from parsed queryString
  let questionNumber = parseInt(number);
  typeof questionNumber !== number ? (questionNumber = 0) : null;

  // set length of quiz from props
  useEffect(() => {
    setQuizLength(lengthOfQuiz);
  }, [lengthOfQuiz]);

  // returns quiz valid boolean
  const isQuizValid = useQuizValid(questionNumber, quizLength);

  console.log("IS-QUIZ-VALID:", isQuizValid);

  return (
    <div className="quiz-container">
      {/* {isQuizValid(quizLength) ? <p>Loading</p> : null} */}

      {isQuizValid ? (
        <FilterQuiz
          questions={questions}
          questionNumber={questionNumber}
          quizLength={quizLength}
          answers={answers}
        />
      ) : (
        <p>SHOULD REDIRECT</p>
      )}

      <AnswerButtons questionNumber={questionNumber} questions={questions} />
    </div>
  );
}

//<Redirect to={"/"} />

Quiz.propTypes = {
  questions: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
};
