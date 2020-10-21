import "./quiz.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// ROUTING
import { useLocation } from "react-router-dom";
import queryString from "query-string";

// COMPONENTS
import AnswerButtons from "../../components/AnswerButtons";
import FilterQuiz from "../../components/FilterQuiz";
import NotFound from "../NotFound";

// REDUX
import { useSelector } from "react-redux";

// CUSTOM HOOK
import useQuizValid from "../../hooks/useQuizValid";
import useQueryValid from "../../hooks/useQueryValid";

export default function Quiz({ questions, answers }) {
  const [quizLength, setQuizLength] = useState(0);
  const lengthOfQuiz = Object.keys(questions).length;

  // receive search queryString from router location
  const { search } = useLocation();
  const { number } = queryString.parse(search);

  // only return typeof number from parsed queryString
  const validQuery = useQueryValid(number);
  const questionNumber = validQuery;

  // set length of quiz from props
  useEffect(() => {
    setQuizLength(lengthOfQuiz);
  }, [lengthOfQuiz]);

  // returns quiz valid boolean
  const isQuizValid = useQuizValid(questionNumber, quizLength);

  // question states
  const { finishedTyping } = useSelector((state) => state.typing);
  console.log("finishedTyping: >>", finishedTyping);
  //console.log("IS-QUIZ-VALID:", isQuizValid);

  return (
    <>
      {isQuizValid ? (
        <div className="quiz-container">
          <FilterQuiz
            questions={questions}
            questionNumber={questionNumber}
            quizLength={quizLength}
            answers={answers}
          />
          <AnswerButtons
            questionNumber={questionNumber}
            questions={questions}
          />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

Quiz.propTypes = {
  questions: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
};
