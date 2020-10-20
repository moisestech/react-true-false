import "./answerbuttons.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { handleAnswerQuestion } from "../../state/actions/answers";

export default function AnswerButtons({ questionNumber, questions }) {
  const dispatch = useDispatch();

  // check string of answer vs corect_answer
  // dispatch wrong or correct
  const handleAnswer = (e, answer) => {
    e.preventDefault();

    const correct_answer = questions[
      questionNumber - 1
    ].correct_answer.toLowerCase();
    if (answer == correct_answer) {
      dispatch(handleAnswerQuestion(questionNumber, "correct"));
    } else {
      dispatch(handleAnswerQuestion(questionNumber, "wrong"));
    }
  };

  return (
    <div className="answer-buttons">
      <button
        className="button hvr-grow true "
        onClick={(e) => handleAnswer(e, "true")}
      >
        TRUE
      </button>
      <button
        className="button hvr-grow false"
        onClick={(e) => handleAnswer(e, "false")}
      >
        FALSE
      </button>
    </div>
  );
}

AnswerButtons.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  questions: PropTypes.object.isRequired,
};
