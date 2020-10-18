import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { generateID, parseQuote } from "../../utils/helpers";
import Question from "../../components/Question";

export default function FilterQuiz({
  questions,
  answers,
  questionNumber,
  quizLength,
}) {
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // returns correct or wrong
    // if question is defined
    // else false
    const question = questionNumber;
    const length = answers.length;
    const answerPosition = answers[question - 1];

    console.group("FILTER-QUIZ-COMP:", question);
    console.log("QUIZ-LENGTH:", quizLength);
    console.log("ANSWER-POSITION:", answers[question - 1]);
    console.groupEnd();

    if (length > 0) {
      if (answerPosition !== undefined) {
        setIsAnswered(false);
        const result = answerPosition.answerResult;
        if (result === "correct" || result === "wrong") {
          setIsAnswered(true);
        } else {
          setIsAnswered(false);
        }
      } else {
        setIsAnswered(false);
      }
    } else {
      setIsAnswered(false);
    }
  }, [questionNumber, answers, quizLength]);

  return Object.entries(questions)
    .filter((question) => parseInt(question[0]) + 1 === questionNumber)
    .map(([filteredQuestion, value], index) => {
      return (
        <Question
          key={`${index + 1}${generateID()}`}
          text={parseQuote(value.question)}
          category={value.category}
          correct_answer={value.correct_answer}
          questionNumber={questionNumber}
          quizLength={quizLength}
          isAnswered={isAnswered}
        />
      );
    });
}

FilterQuiz.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  answers: PropTypes.array,
};
