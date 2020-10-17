import PropTypes from "prop-types";

// HELPERS
import { generateID, parseQuote } from "../../utils/helpers";

// COMPONENTS
import Question from "../../components/Question";

export default function FilterQuiz({
  questions,
  answers,
  questionNumber,
  quizLength,
}) {
  // returns correct or wrong
  // if question is defined
  // else false
  const handleIsAnswered = (questionNumber, answers = []) => {
    const length = answers.length;
    const answerPosition = answers[questionNumber - 1];

    if (length > 0) {
      if (answerPosition !== undefined) {
        const result = answerPosition.answerResult;
        if (result === "correct" || result === "wrong") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return Object.entries(questions)
    .filter((question) => parseInt(question[0]) + 1 === questionNumber)
    .map(([filteredQuestion, value], index) => {
      console.log("QUIZ-LENGTH:", quizLength);

      return (
        <Question
          key={`${index + 1}${generateID()}`}
          text={parseQuote(value.question)}
          category={value.category}
          correct_answer={value.correct_answer}
          questionNumber={questionNumber}
          totalQuestions={quizLength}
          isAnswered={handleIsAnswered(questionNumber, answers)}
        />
      );
    });
}

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  answers: PropTypes.array,
};
